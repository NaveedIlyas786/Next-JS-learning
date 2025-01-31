import { NextResponse } from "next/server";

 export const GET = async (req, context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers: {
            "Content-Type": "application/json"
        }
    });
    const dataResponse = await response.json();
    return NextResponse.json(dataResponse, { status: 200 });
 }