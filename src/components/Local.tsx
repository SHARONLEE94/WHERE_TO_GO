import axios from "../api/axios";
import { useEffect, useState } from "react"
import requests from "../api/request";
import Sigungu from "./Sigungu";

const Local = () => {

  const [localData, setLocalData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${requests.fetchAreaCode1}numOfRows=10&pageNo=1`)
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
              <Sigungu localCode={data.code}/>
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