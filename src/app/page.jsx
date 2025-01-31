import UseRouterLearning from "@/components/useRouterLearning"
import LinkLearning from "../components/LinkLearning"
import "./page.css"
import DataFetching from "@/components/DataFetching"
import GetDataFromDB from "@/components/GetData"
import PostData from "@/components/PostData"
import GetDataFromDBDirectly from "@/components/GetData2"
import PostData2 from "@/components/PostData2"

const page = () => {
  return (
    <div className="container">
        <h1>Next Project Learning</h1>
        <LinkLearning />
        {/* <UseRouterLearning/> */}
        {/* <DataFetching/> */}
        {/* <GetDataFromDB/> */}
        {/* <PostData/> */}
        <PostData2/>
        <GetDataFromDBDirectly/>
    </div>
  )
}

export default page