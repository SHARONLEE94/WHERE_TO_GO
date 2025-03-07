import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const SearchBanner = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isHome) {
      navigate(`/search?location=${searchValue}&page=1`);
    } else {
      navigate(`/search?location=${searchValue}&page=1`);
    }
  };

  return (
    <div>
      {isHome ? (
        <section
          className="relative h-[500px] flex items-center justify-center"
          style={{ backgroundColor: "#FFF0F3" }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              설렘 가득한 여행
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              당신의 목적지는 어디인가요?
            </p>
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-2xl mx-auto flex gap-4 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex-1 flex gap-2">
                <Search className="w-5 h-10 text-gray-400" />
                <Input
                  placeholder="어디로 떠나시나요?"
                  className="border-none shadow-none"
                  value={searchValue}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="bg-[#FFB7C5] hover:bg-[#ff9fb2] h-10"
              >
                검색하기
              </Button>
            </form>
          </div>
        </section>
      ) : (
        <section className="bg-[#FFF0F3] py-8">
          <div className="container mx-auto px-4">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-2xl mx-auto flex gap-4"
            >
              <div className="flex-1 flex gap-2 bg-white rounded-lg p-2">
                <Search className="w-5 h-10 text-gray-400" />
                <Input
                  placeholder="어디로 떠나시나요?"
                  className="border-none shadow-none"
                  value={searchValue}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="bg-[#FFB7C5] hover:bg-[#ff9fb2]"
                style={{ height: "56px", cursor: "pointer" }}
              >
                검색하기
              </Button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchBanner;
