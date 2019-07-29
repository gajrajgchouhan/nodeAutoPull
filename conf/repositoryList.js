const fs = require('fs');
const path = require('path');

module.exports = function() {
	let rawdata = fs.readFileSync(path.join(__dirname, "repositoryList.json"));
	let repositoryList = JSON.parse(rawdata);
	return repositoryList;
}
