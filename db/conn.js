
const mongoose= require('mongoose');
const DB= process.env.DATABASE;
// dotenv.config({path: './config.env'});

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));
