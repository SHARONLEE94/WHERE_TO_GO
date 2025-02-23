import axios from "../api/axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const Local = () => {

  const [localData, setLocalData] = useState<Item[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`/areaCode1`)
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
      <h2>Local box</h2>
      {localData.map((data)=>{
        return <div key={data.rnum} onClick={() => navigate(`/${data.code}/${data.rnum}`)}>{data.name}</div>
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