const fs = require('fs');
const path = require('path');
const csv = require('@fast-csv/parse');
const puppeteer = require('puppeteer');
const { email, password, note } = require('./config');

(async () => {
	const sheetPath = path.resolve(__dirname, 'sheet.csv');

	if (!fs.existsSync(sheetPath)) {
		console.log('sheet.csv is not found!');
		return;
	}

	let rows = [];

	fs.createReadStream(sheetPath)
		.pipe(csv.parse({ headers: true }))
		.on('error', (error) => console.error(error))
		.on('data', (row) => rows.push(row))
		.on('end', (rowCount) => console.log(`Parsed ${rowCount} names`));

	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://www.theforeverdiary.com/login', {
		waitUntil: 'networkidle0',
	});

	await page.waitForSelector('input[name=email]');

	await page.$eval(
		'input[name=email]',
		(el, email) => (el.value = email),
		email
	);
	await page.$eval(
		'input[name=password]',
		(el, password) => (el.value = password),
		password
	);
	await page.$eval('button[type=submit]', (el) => el.click());

	await page.waitForSelector('.user-profile');

	await page.goto('https://www.theforeverdiary.com/request-testimonial', {
		waitUntil: 'networkidle0',
	});

	for (const i in rows) {
		if (rows[i]['Send Testimonial Request?'] === 'TRUE') {
			await page.waitForSelector('option');
			await page.waitForSelector('input');

			await page.select('#student_id', rows[i].ID);
			await page.$eval(
				'input[name=note]',
				(el, note) => (el.value = note),
				note
			);
			await page.$eval('button[type=submit]', (el) => el.click());

			console.log('Sent Request to ', rows[i].Name);
			await page.waitForTimeout(3000);
		}
	}

	await browser.close();
})();
