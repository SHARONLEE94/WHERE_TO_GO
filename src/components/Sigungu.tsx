import { useEffect, useState } from "react"
import axios from "../api/axios"
import requests from "../api/request"
import { useNavigate } from "react-router";

const Sigungu = ({localCode}:LocationData) => {

  const navigate = useNavigate();
  const [localData, setLocalData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${requests.fetchAreaCode1}?areaCode=${localCode}`)
        // console.log('sigungu',result.data.response.body.items.item)
        setLocalData(result.data.response.body.items.item)
      } catch(e) {
        console.log(e)
      }
    }
    fetchData();
  }, [localCode])
  
  return(
    <div>
      <div>
        {localData.map((data)=>{
          return (
            <div key={data.rnum}>
              <p>{data.name}</p>
              <ul>
                <li onClick={() => navigate(`/${localCode}/${data.code}/12`)}>관광지</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/14`)}>문화시설</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/15`)}>행사/공연/축제</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/25`)}>여행코스</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/28`)}>레포츠</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/32`)}>숙박</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/38`)}>쇼핑</li>
                <li onClick={() => navigate(`/${localCode}/${data.code}/39`)}>음식점</li>
            </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sigungu

interface LocationData {
  localCode: string;
}

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