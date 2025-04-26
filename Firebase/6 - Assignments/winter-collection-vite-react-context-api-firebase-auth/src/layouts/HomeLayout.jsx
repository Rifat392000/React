import { Outlet } from "react-router-dom"
import { Header, Footer, HomeTheme } from "../components"
import { PageTitle } from "../pages"
const HomeLayout = () => {


  return (
    <div>
      <PageTitle title="Home" />
    <div><Header></Header></div>
    <div><HomeTheme></HomeTheme></div>
    <div><Outlet /></div>
    <div><Footer></Footer></div>

    </div>
  )
}

export default HomeLayout