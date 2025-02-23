import axios from "axios";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1/",
  params: {
    serviceKey: 'Lb/pe0QdvmS9xi1rZA/I0GrloCUanMMf0EBvD0Mq3ebRvn63bGT6WXXHvJosBF2qCvMKVwjL7XpGGE1oB9Cj4g==',
    numOfRows:"30",
    pageNo:"1",
    MobileOS:"ETC",
    MobileApp:"AppTest",
    _type: "json"
  }
})

export default instance;