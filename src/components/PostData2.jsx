import connectDB from "@/app/lib/connectDB"
import PostModel from "@/app/models/Post"

const create= async(formData)=>{
    'use server'
    await connectDB()

    const result = await PostModel.create({
        title: formData.get('title'),
        content: formData.get('content')
    })
    console.log("Result is: ",result)
}


const PostData2 = () => {
  return (
    <div>
        <h1>Post Data To Database</h1>
        <form action={create}  >
            <strong>Title</strong> <input className="inputs" type="text" name="title" />
            <strong>Content</strong> <input className="inputs" type="text" name="content"/>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}

export default PostData2