const router = require('express').Router();
const {promisify} = require('util');
const {exec} = require('child_process');
const subprocess = promisify(exec);
const {verifyPostData, sendEmail} = require('../helper/verify');
const fn = require('express-async-handler');
let repositoryListFn = require('../conf/repositoryList');

router.post('/:id', fn(async(req, res, next) => {
	let rebase = {};
	let status = {};
	const repositoryList = repositoryListFn();
	const repoInfo = repositoryList[req.params.id];
	
	if(!repoInfo) return next(new Error("Repository not registered."));
	if(!verifyPostData(req, repoInfo.secret)) return next(new Error("failed to match secret."));
	
	const options = {
		timeout : 20000,
		cwd : repoInfo.path
	}


	try {
		await subprocess("git fetch",options);
		rebase = await subprocess("git rebase origin/master", options); // exit code for a failed merge is 128
	} catch (error) {
		status = await subprocess("git status", options);
		// send email to server admin
		await sendEmail(error.toString(), status.stdout, repoInfo.name);
		return next(new Error("Encountered error while rebasing"));
	}

	console.log('*** Used git pull ***');
	res.send('git pull successful');
}));

module.exports = router;
