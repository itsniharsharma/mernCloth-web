// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://myMERNcloth:myMERNcloth@mymerncloth.idu0ou3.mongodb.net/myMERNcloth?retryWrites=true&w=majority&appName=myMERNcloth';

// const mongoDB = async () => {
//     await mongoose.connect(mongoURI, {useNewUrlParser : true}, async(err,result)=>{
//         if(err) console.log("error :(");
//         else{
//             console.log("connected :)");
//             const fetched_data=await mongoose.connection.db.collection("cloth_items");
//             fetched_data.find({}).toArray(function(err, data){
//                 if(err) console.log(err)
//                 else console.log(data);
//             })
//         }
//     })
// };

// module.exports = mongoDB;


// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://myMERNcloth:myMERNcloth@mymerncloth.idu0ou3.mongodb.net/myMERNcloth?retryWrites=true&w=majority&appName=myMERNcloth';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected :)");

//         const fetched_data = mongoose.connection.db.collection("cloth_items");
//         fetched_data.find({}).toArray((err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//     } catch (err) {
//         console.log("Error :(", err);
//     }
// };

// module.exports = mongoDB;

const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://myMERNcloth:myMERNcloth@mymerncloth.idu0ou3.mongodb.net/myMERNcloth?retryWrites=true&w=majority&appName=myMERNcloth';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected :)");

        const fetched_data = mongoose.connection.db.collection("cloth_items");
        const data = await fetched_data.find({}).toArray();
        console.log();
    } catch (err) {
        console.error("Error :(", err);
    }
};

module.exports = mongoDB;


