
import { FadeLoader } from "react-spinners"
const Loading = () => {
  return (
 <div className="min-h-screen flex justify-center items-center">
<FadeLoader
  color="green"
  height={20}
  radius={3}
  width={6}
/>
    </div>
  )
}

export default Loading