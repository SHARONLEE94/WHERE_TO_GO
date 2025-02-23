import axios from "../api/axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import requests from "../api/request";

const Local = () => {

  const [localData, setLocalData] = useState<Item[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${requests.fetchAreaCode1}`)
        // console.log(result.data.response.body.items.item)
        setLocalData(result.data.response.body.items.item)
      } catch(e) {
        console.log(e)
      }
    }
    fetchData();
  }, [])
  

  return (
    <div>
      <h2>Local box</h2>
      {localData.map((data)=>{
        return (
          <div className="localBox" key={data.rnum} >
            <p>{data.name}</p>
            <ul>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/12`)}>관광지</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/14`)}>문화시설</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/15`)}>행사/공연/축제</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/25`)}>여행코스</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/28`)}>레포츠</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/32`)}>숙박</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/38`)}>쇼핑</li>
              <li onClick={() => navigate(`/${data.code}/${data.rnum}/39`)}>음식점</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Local

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