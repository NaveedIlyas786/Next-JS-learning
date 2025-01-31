import LearnUseImage from "@/components/LearnUseImage"
import styles from "../../../../css/LearnCSS.module.css"
const page = () => {
  return (
    <div>
      <h1 className={styles?.h1Css}>Blog Page</h1>
      <p>Simple Routing</p>
      <LearnUseImage/>
    </div>
  )
}

export default page