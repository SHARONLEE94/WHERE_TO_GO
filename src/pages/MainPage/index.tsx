import Category from "@/components/Category";
import SearchBanner from "../../components/SearchBanner";
import Contents from "../../components/Contents";

const MainPage = () => {
  return (
    <div className="mainPage">
      <SearchBanner />
      <Contents />
      <Category />
    </div>
  );
};

export default MainPage;
