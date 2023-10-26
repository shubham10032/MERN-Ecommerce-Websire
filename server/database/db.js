import mongoose from "mongoose";

 
export const Connection = async() => {
    // const URL = 'mongodb+srv://shubhamhydear:DuA1maPWba1C7j2c@cluster0.kizrale.mongodb.net/';
    try {
       await mongoose.connect(URL, {useUnifiedTopology: true , useNewUrlParser: true});
       console.log("Database Connected successfully")
    } catch (error) {
        console.log('Error while connecting database' ,  error.message)
    }
}

export default Connection;
