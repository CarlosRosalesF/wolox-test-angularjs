const constant = require('./config/constant');
const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || constant.PORT;

app.listen(port, () => {
	console.log(`running in port: ${port}`);
});
