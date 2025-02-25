import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Star, ChevronLeft, ChevronRight} from "lucide-react"
import axios from "../api/axios";
import requests from "../api/request";
import { useLocation } from "react-router";
import { Card, CardContent } from "./ui/card";

const SearchResults = () =>{

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery().get("value") ?? "";
  const [localData, setLocalData] = useState<Item[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchTempVal, setSearchTempVal] = useState("") // searchTerm 변수를 사용하면 값이 즉각적인 변화되고 검색하기 버튼 클릭 또는 enter 사용시 "" 값이 들어가버림 추가로 변수 설정.
  const [totalCount, setTotalCount] = useState(0)
  const [numOfRows, setNumOfRows] = useState(10)
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${requests.fetchSearchKeyword1}?listYN=Y&arrange=A&keyword=${searchTerm}&numOfRows=${numOfRows}&pageNo=${pageNo}`)
        if(result) {
          setLocalData(result.data.response.body.items.item || [])
          setTotalCount(result.data.response.body.totalCount || 0)
          setNumOfRows(result.data.response.body.numOfRows || 10)
          setPageNo(result.data.response.body.pageNo || 1)
        }
      } catch(e) {
        console.log(e)
        setLocalData([])
      }
    }
    if (searchTerm) fetchData();
  }, [searchTerm, pageNo])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTempVal(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(searchTempVal)
  }

  // Calculate pagination
  const totalPages = Math.ceil(totalCount / numOfRows)
  // const startIndex = (pageNo - 1) * numOfRows
  // const paginatedResults = localData.slice(startIndex, startIndex + numOfRows)

  const handlePageChange = (page: number): void => {
    setPageNo(page)
  }

  return(
    <div className="min-h-screen bg-white">
      
      {/* Search Header */}
      <div className="bg-[#FFF0F3] py-8">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex gap-4">
            <div className="flex-1 flex gap-2 bg-white rounded-lg p-2">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="어디로 떠나시나요?"
                className="border-none shadow-none"
                value={searchTempVal}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="bg-[#FFB7C5] hover:bg-[#ff9fb2]">
              검색하기
            </Button>
          </form>
        </div>
      </div>

      
        {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">

          {/* Main Content */}
          <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">'{searchTerm}' 검색 결과</h1>
                  <p className="text-gray-500">총 {totalCount}개의 결과</p>
                </div>
              </div>
            {/* Results Grid */}
            <div className="space-y-6">
              {localData.length > 0 
                ? (localData.map((data) => (
                    <Card key={data.title}  className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto relative">
                            <img
                              src={data.firstimage || "/placeholder.svg"}
                              alt={data.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-semibold mb-1">{data.title}</h3>
                                <div className="flex items-center gap-1 mb-2">
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">{data.addr1}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">rating</span>
                                <span className="text-sm text-gray-500">reviewCount</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">description</p>
                            <div className="flex flex-wrap gap-2">
                              {/* {data.tags.map((tag) => ( */}
                                <span className="px-2 py-1 bg-[#FFF0F3] text-[#FFB7C5] text-xs rounded-full">
                                  # 여행을_떠나요_즐거운_마음으로
                                </span>
                              {/* ))} */}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))) 
                : (<div className="text-center py-12">
                        <p className="text-gray-500">검색 결과가 없습니다.</p>
                    </div>
                  )
              }

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handlePageChange(Math.max(1, pageNo - 1))}
                      disabled={pageNo === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={pageNo === page ? "default" : "outline"}
                        className={pageNo === page ? "bg-[#FFB7C5] hover:bg-[#ff9fb2]" : ""}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handlePageChange(Math.min(totalPages, pageNo + 1))}
                      disabled={pageNo === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>  
      </div>  
    </div>
  )
}

export default SearchResults

export interface Root {
  response: Response
}

export interface Response {
  header: Header
  body: Body
}

export interface Header {
  resultCode: string
  resultMsg: string
}

export interface Body {
  items: Items
  numOfRows: number
  pageNo: number
  totalCount: number
}

export interface Items {
  item: Item[]
}

export interface Item {
  addr1: string
  addr2: string
  areacode: string
  booktour: string
  cat1: string
  cat2: string
  cat3: string
  contentid: string
  contenttypeid: string
  createdtime: string
  firstimage: string
  firstimage2: string
  cpyrhtDivCd: string
  mapx: string
  mapy: string
  mlevel: string
  modifiedtime: string
  sigungucode: string
  tel: string
  title: string
}