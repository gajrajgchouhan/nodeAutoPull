const express = require('express');
const morgan = require('morgan');

// const {folderPath, secret} = require('./config');

const app = express();

// log all requests
app.use(morgan('tiny'));

// express body-parser
app.use(express.json({
	limit: '10MB',
	extended: true
}));
app.use(express.urlencoded({
	limit: '10MB',
	extended: true
}));

// routes
const gitRouter = require('./routes/git');
const indexRouter = require('./routes/index');
app.use('/',indexRouter);
app.use('/git',gitRouter);

// for invalid paths
app.use((req, res) => {
	res.send('Page not found');
});

// error handling
app.use((err, req, res, next) => {
	console.log('ErrorMessage : ',err.message);
	if (res.headersSent) next(err);
	res.send('Something Broke !!');
});

//listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server started listening on PORT : ${PORT}`);
});
