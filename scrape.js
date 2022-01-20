const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://www.theforeverdiary.com/login', {
		waitUntil: 'networkidle0',
	});

	await page.waitForSelector('input[name=email]');

	await page.$eval(
		'input[name=email]',
		(el) => (el.value = 'f20180460@hyderabad.bits-pilani.ac.in')
	);
	await page.$eval('input[name=password]', (el) => (el.value = 'MtKulv0T'));
	await page.$eval('button[type=submit]', (el) => el.click());

	await page.waitForSelector('.user-profile');

	await page.goto('https://www.theforeverdiary.com/request-testimonial', {
		waitUntil: 'networkidle0',
	});

	await page.waitForSelector('option');

	const nameIDs = await page.$$eval('option', (el) =>
		el.map((x) => x.getAttribute('value'))
	);
	const names = await page.$$eval('option', (el) =>
		el.map((x) => x.innerHTML)
	);

	const student = [];

	for (let i = 1; i < names.length; i++) {
		student.push({
			ID: nameIDs[i],
			Name: names[i],
			'Send Testimonial Request?': 'NO',
		});
	}

	const fs = require('fs');
	let data = JSON.stringify(student, null, 2);
	fs.writeFileSync('names.json', data);

	//console.log(names);

	//await browser.close();
})();
