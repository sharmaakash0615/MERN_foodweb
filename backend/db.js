//  const mongoose=require("mongoose");

//  const mongoURI="mongodb://sharmaakash0615:mongo@ac-3t8gx3u-shard-00-00.zwg5kmw.mongodb.net:27017,ac-3t8gx3u-shard-00-01.zwg5kmw.mongodb.net:27017,ac-3t8gx3u-shard-00-02.zwg5kmw.mongodb.net:27017/item?ssl=true&replicaSet=atlas-gdfcn4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
//   const mongoDb=async ()=>{

//     await mongoose.connect(mongoURI,{useNewUrlParser:true} ,async(err,result)=>{

//           if(err) consolr.log(err)
        
//             else{
//               console.log("connected");
//               const fetchdata= await mongoose.connection.db.collection("sample");

//               fetchdata.find({}).toArray(function(err,data){

//                 if(err) console.log(err);
//                 else{
//                     console.log(data); 
//                 //    global.food_item=data;
//                 }
//               });

//             }
//     })
// }
// module.exports = mongoDb;



// const mongoose = require("mongoose");

// const mongoURI = "mongodb://sharmaakash0615:mongo@ac-3t8gx3u-shard-00-00.zwg5kmw.mongodb.net:27017,ac-3t8gx3u-shard-00-01.zwg5kmw.mongodb.net:27017,ac-3t8gx3u-shard-00-02.zwg5kmw.mongodb.net:27017/item?ssl=true&replicaSet=atlas-gdfcn4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

// const mongoDb = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
           
//         });

//         console.log('MongoDB connected successfully');

//         const fetchdata = await mongoose.connection.db.     collection("sample");
//         const data = await fetchdata.find({}).toArray();
//           console.log(data);
//           // global.food_item=data;
//     } catch (err) {
//         console.error('MongoDB connection error:', err);
//     }
// };

// module.exports = mongoDb;







const mongoose = require("mongoose");
const mongoURI = "mongodb://sharmaakash0615:mongo@ac-3t8gx3u-shard-00-00.zwg5kmw.mongodb.net:27017,ac-3t8gx3u-shard-00-01.zwg5kmw.mongodb.net:27017,ac-3t8gx3u-shard-00-02.zwg5kmw.mongodb.net:27017/item?ssl=true&replicaSet=atlas-gdfcn4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const mongoDb = async () => {
    try {
        await mongoose.connect(mongoURI, {
           
        });

        console.log('MongoDB connected successfully');

        const fetchdata = await mongoose.connection.db.collection("sample");
  const data =await fetchdata.find({}).toArray();

const foodcategoty=await mongoose.connection.db.collection("datacategory");
const catdata =await foodcategoty.find({}).toArray()
        //    console.log(catdata)
        //     console.log(data);
           global.food_item=data;
           global.datacategory=catdata;
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = mongoDb;
       


