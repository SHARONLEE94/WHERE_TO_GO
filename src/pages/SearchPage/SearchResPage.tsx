import { useEffect, useState } from "react";
import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../../components/ui/card";
import useSearchParmas from "@/hooks/useSearchParmas";
import SearchBanner from "@/components/SearchBanner";
import Pagination from "@/components/Page";
import useSearchStore from "@/store/searchLocation";
import LoadingWrapper from "@/components/LodingWrapper";

const SearchResults = () => {
  const navigate = useNavigate();
  const query = useSearchParmas();
  const {
    searchTerm,
    pageNo,
    localData,
    totalCount,
    isLoading,
    error,
    setSearchTerm,
    setPageNo,
    fetchSearchData,
  } = useSearchStore();

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const location = query.get("location") ?? "";
    const page = Number(query.get("page")) || 1;
    setSearchVal(location);
    setPageNo(page);
  }, [query.get("location"), query.get("page")]);

  useEffect(() => {
    const location = query.get("location") ?? "";
    const page = Number(query.get("page")) || 1;

    if (searchTerm !== location) {
      setSearchTerm(location);
    }
    if (pageNo !== page) {
      setPageNo(page);
    }
  }, [query.get("location"), query.get("page")]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchData(searchTerm, pageNo);
    }
  }, [searchTerm, pageNo]);

  return (
    <LoadingWrapper isLoading={isLoading} error={error}>
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
                  <div className="text-center py-12">
                    <p className="text-gray-500">검색 결과가 없습니다.</p>
                  </div>
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
    </LoadingWrapper>
  );
};

export default SearchResults;
