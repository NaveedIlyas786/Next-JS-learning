import connectDB from "@/app/lib/connectDB";
import PostModel from "@/app/models/Post";

export default async function GetDataFromDBDirectly(){
   await connectDB();
   const data1 = await PostModel.find()
  console.log("data1: ",data1)
    return (
        <div>
            {data1?.map((a)=>(
              <div key={a._id}>
              
            <h1>{a.title}</h1>
            <h4>{a.content}</h4>
              </div>
          ))}
          </div>
    )
}