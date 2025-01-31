'use client'
import { useRouter } from "next/navigation"
const UseRouterLearning = () => {
    const router = useRouter()
  return (
    <div>
        <h1>UseRouterLearning</h1>
        <button type="button" onClick={()=>router.push("/simpleRouting/blogs")}>Goto Blog Page</button>
    </div>
  )
}

export default UseRouterLearning