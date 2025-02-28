import { useEffect, useState } from "react";
import { Loader2, MapPin, Star } from "lucide-react";
import axios from "../../api/axios";
import requests from "../../api/request";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../../components/ui/card";
import { Root, Item } from "@/types/Search";
import useSearchParmas from "@/hooks/useSearchParmas";
import SearchBanner from "@/components/SearchBanner";
import Pagination from "@/components/Page";
import { Button } from "@/components/ui/button";
// import Pagination from "@/components/Page";

const SearchResults = () => {
  const navigate = useNavigate();

  const query = useSearchParmas();
  const [searchVal, setSearchVal] = useState("");

  // url 파라미터 값
  useEffect(() => {
    const location = query.get("location") ?? "";
    const page = Number(query.get("page")) || 1;
    setSearchVal(location);
    setPageNo(page);
  }, [query.get("location"), query.get("page")]);

  const [localData, setLocalData] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  // const [numOfRows, setNumOfRows] = useState(10)
  const [pageNo, setPageNo] = useState(1); // 데이터 통신에서 받아온 페이지

  useEffect(() => {
    setSearchTerm(searchVal);
  }, [searchVal]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const result: Root = await axios.get(
          `${requests.fetchSearchKeyword1}?listYN=Y&arrange=A&keyword=${searchTerm}&numOfRows=10&pageNo=${pageNo}`
        );

        if (result) {
          setLocalData(result.data.response.body.items.item || []);
          setTotalCount(result.data.response.body.totalCount || 0);
          setPageNo(result.data.response.body.pageNo || 1);
          window.scrollTo(0, 0);
        }
      } catch (e) {
        setError(true);
        if (e instanceof Error) {
          setErrorData(e.message);
        }
      } finally {
        setIsloading(false);
      }
    };
    if (searchTerm) fetchData();
  }, [searchTerm, pageNo]);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#FFB7C5] mx-auto mb-4" />
          <p className="text-gray-500">LOADING...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-red-600 text-xl font-semibold mb-2">
              오류가 발생했습니다
            </h2>
            <p className="text-red-500">{errorData}</p>
            <Button
              className="mt-4 bg-red-600 hover:bg-red-700"
              onClick={() => window.location.reload()}
            >
              다시 시도
            </Button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header */}
      <SearchBanner />

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  '{searchVal}' 검색 결과
                </h1>
                <p className="text-gray-500">총 {totalCount}개의 결과</p>
              </div>
            </div>
            {/* Results Grid */}
            <div className="space-y-6">
              {localData.length > 0 ? (
                localData.map((data) => (
                  <Card
                    key={data.contentid}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <CardContent
                      className="p-0"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/searchDetail`, {
                          state: {
                            contentid: data.contentid,
                            contenttypeid: data.contenttypeid,
                          },
                        })
                      }
                    >
                      <div className="flex flex-col md:flex-row">
                        <div
                          className="md:w-1/3 h-48 md:h-48 lg:h-56 relative overflow-hidden pl-4 pr-4"
                          style={{ aspectRatio: "4/3" }}
                        >
                          <img
                            src={data.firstimage || "/placeholder.svg"}
                            alt={data.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">
                                {data.title}
                              </h3>
                              <div className="flex items-center gap-1 mb-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  {data.addr1}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">rating</span>
                              <span className="text-sm text-gray-500">
                                reviewCount
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">description</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-[#FFF0F3] text-[#FFB7C5] text-xs rounded-full">
                              # 여행을_떠나요_즐거운_마음으로
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <>
                  {isLoading ? (
                    <div>LOADING...</div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">검색 결과가 없습니다.</p>
                    </div>
                  )}
                </>
              )}

              <Pagination
                totalCount={totalCount}
                pageNo={pageNo}
                searchVal={searchVal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
