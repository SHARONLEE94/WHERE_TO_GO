import { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailPage = () => {
  const { code, rnum } = useParams();
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
          `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=Lb%2Fpe0QdvmS9xi1rZA%2FI0GrloCUanMMf0EBvD0Mq3ebRvn63bGT6WXXHvJosBF2qCvMKVwjL7XpGGE1oB9Cj4g%3D%3D&pageNo=1&numOfRows=30&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=32&areaCode=${code}&sigunguCode=${rnum}&_type=json`
      );
      const json = (await result.json()) as Root;
      setData(json.response.body.items.item);
      console.log(json.response.body.items.item)
    };
    fetchData();
  }, [])

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
