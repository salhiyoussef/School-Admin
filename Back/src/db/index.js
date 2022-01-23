module.exports = mongoose => {
    const DB = process.env.MONGO_DB_URL;

                                            // S Y N T A X E   N 1
//     const {connect, connection} = mongoose;
//    connect(DB, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//     });

//     connection.on('connected', () => {
//         const data = DB.includes('schoolproject');
//         console.log(`Connected Succefuly in ${data ? 'schoolproject' : null}`)
//     });

//     connection.on('err', (err) => {
//         console.log(`Error to connect ${err}`)
//     });


                                            // S Y N T A X E   N 2
    const {connect} = mongoose;
    mongoose.Promise = global.Promise;

    connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify : false,
    }, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });

}