const moongoose = require('mongoose')


const connectionDB = async () => {

    try {

        const conn = await moongoose.connect(process.env.MONGO_CONNECTION_URL)

        console.log(`Mongodb connected:${conn.connection.host}`.cyan.underline);

    } catch (error) {

        console.log(error);
        process.exit(1)

    }



}

module.exports = connectionDB