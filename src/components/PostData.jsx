"use client";

import { useState } from "react";

const PostData = () => {
    const [postData, setPostData]= useState({
        title: "",
        content: ""
    })

    const handleChange = (e)=>{
        setPostData({...postData, [e.target.name] : e.target.value })
    } 

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = await fetch('http://localhost:3000/api/callMongoDB',{
            method: "POST",
            body: JSON.stringify(postData)
        });

        console.log("Data posted: ", data)
    }

  return (
    <div>
        <h1>Post Data To Database</h1>
        <form action="" onSubmit={handleSubmit} >
            <strong>Title</strong> <input className="inputs" type="text" name="title" value={postData.title} onChange={handleChange} />
            <strong>Content</strong> <input className="inputs" type="text" name="content" value={postData.content} onChange={handleChange} />
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}

export default PostData