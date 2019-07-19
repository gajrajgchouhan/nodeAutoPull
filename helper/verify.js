const crypto = require('crypto');
const nodemailer = require('nodemailer');

module.exports.verifyPostData = (req, secret) => {
	
	const payload = JSON.stringify(req.body);
	if (!payload) {
		console.log('Request body empty');
		return false;
	}

	const headerKey = 'x-hub-signature';
	const hmac = crypto.createHmac('sha1', secret);
	const digest = 'sha1=' + hmac.update(payload).digest('hex');
	const checksum = req.headers[headerKey];

	if (!checksum || !digest || checksum !== digest) {
		console.log(`Request body digest (${digest}) did not match ${headerKey} (${checksum})`);
		return false;
	}

	console.log('verified signature');
	return true;
}

module.exports.checkConflicts = (data) => {
	const regex = /(conflict|fail|abort)/i;
	const flag = regex.test(data);
	return flag;
}

module.exports.sendEmail = async(rebaseOutput, statusOutput, repoName) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'milcfvgjhictfgvhbjnd.topnfctgvhbjno@gmail.com',
			pass: 'tdrybgufghjbnkdryjgurytuk'
		}
	});
	const mailOptions = {
		from: 'milind.topno@gmail.com', // sender address
		to: 'spam4milind@gmail.com', // list of receivers
		subject: 'Error in SNTC Server', // Subject line
		html: `
		<h1>There was an error in sntc server while rebasing 
		latest changes in ${repoName}</h1></br>

		<h2>Git rebase output :: </h2></br>
		<p>${rebaseOutput}</p></hr>

		<h2>Git status output :: </h2></br>
		<p>${statusOutput}</p></br>
		`
	};
	await transporter.sendMail(mailOptions);
}
