// start the server

const app = require('./app');

const dotenv = require('dotenv');

//load env variables
dotenv.config({ path: './config/config.env' });

//start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
