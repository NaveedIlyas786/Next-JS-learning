import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        const DBOptions = {
            dbName: process.env.DBNAME, // Only pass dbName and authSource
            authSource: process.env.DBAUTHSOURCE, // Ensure the correct spelling
        };

        await mongoose.connect(process.env.DATABASE_URL, DBOptions);
        console.log('MongoDB is connected');
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}


// Now to check if the connection is successful, we can import the connectDB function in the api --> callMongoDB folder and in route.js file and call it.