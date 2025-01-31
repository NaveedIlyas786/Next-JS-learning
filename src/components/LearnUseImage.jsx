import Image from "next/image"
import DeskImage from "../../public/deskimg.webp"
const LearnUseImage = () => {
  return (
    <div>
      <Image src={DeskImage} width={200}/>
    </div>
  )
}

export default LearnUseImage