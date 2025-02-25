import { MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"
import axios from "../api/axios"
import requests from "@/api/request"

const Contents = () => {

  const [localData, setLocalData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${requests.fetchAreaCode1}`)
        console.log(result.data.response.body.items.item)
        setLocalData(result.data.response.body.items.item)
      } catch(e) {
        console.log(e)
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">여행 지역</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {localData.map((data) => (
                <Card className="overflow-hidden hover:shadow-lg transition-shadow" key={data.rnum}>
                  <CardContent className="p-0">
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">주요 관광지 +</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contents

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
  rnum: number
  code: string
  name: string
}