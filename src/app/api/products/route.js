import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
    
    const cookie1 = req.cookies
    console.log("cookie1: ",cookie1) 
    
    //There is also the cookie function
    
    const cookiefun = cookies()
    console.log("cookiefun: ",cookiefun) 
    
    return NextResponse.json({ message: "Hello World GET Data" },{status: 200});
}
export async function POST(req) {
    console.log("Post Req: ",req)
   // const res = await req.json(); //using this we can post the data in json form 
    const res = await req.formData(); //using this we can post the data in FormData form
    console.log("Response: ",res)
    return NextResponse.json({ message: "Data posted successfully!" },{status:201});
}