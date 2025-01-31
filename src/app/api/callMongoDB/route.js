import connectDB from "@/app/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/app/models/Post";

export async function GET() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all posts
        const result = await PostModel.find();

        return NextResponse.json(result , { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 400 });
    }
}


export async function POST(req){
    const responseBody =await req.json()
    try {
        await connectDB()
        const readyPostedData = await PostModel.create(responseBody)
        return NextResponse.json(readyPostedData,{status:201})
    } catch (error) {
        
        return NextResponse.json({message: "Something went wrong!"},{status:400})
    }
}
