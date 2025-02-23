import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../../api/request";

const DetailPage = () => {
  const { code, rnum, contentType } = useParams();
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${requests.fetchAreaBasedList1}&contentTypeId=${contentType}&areaCode=${code}&sigunguCode=${rnum}`)
      // console.log(result.data.response.body.items.item)
      setData(result.data.response.body.items.item);
    };
    fetchData();
  }, [code,rnum,contentType])

  return(
    <div>
      <h1>Detail Page</h1>
      <div>{data.map((data) => {
        return (
          <div key={data.contentid} className="detailPage">
            <h3 >{data.title}</h3>
          </div>
        )
      })}</div>
    </div>
  )
}

export default DetailPage

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
  zipcode: string
}
