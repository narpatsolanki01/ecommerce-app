import mongoose from 'mongoose';

const connection = async (conn) => {
    try {
        await mongoose.connect(conn);
        console.log("Connected to MongoDB");
        }
    catch(err){
        console.log("Not Connected to MongoDB ERROR! ", err);
        }
}
export default connection;