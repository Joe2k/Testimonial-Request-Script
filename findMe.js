const names = require('./names.json');

let prev = 4274;

for (let i in names) {
	// console.log(parseInt(names[i].ID), prev + 1);
	if (parseInt(names[i].ID) !== prev + 1) {
		console.log(names[i].Name);
	}
	prev = parseInt(names[i].ID);
}
