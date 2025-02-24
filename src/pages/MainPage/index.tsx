import Category from "@/components/Category"
import Banner from "../../components/Banner"
import Contents from "../../components/Contents"
// import Local from "../../components/Local"

const MainPage = () => {

  return (
    <div className="mainPage">
      <Banner />
      <Contents />
      {/* <Local /> */}
      <Category />
    </div>
  )
}

export default MainPage