const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.send('Server is up and running');
});

module.exports = router;
