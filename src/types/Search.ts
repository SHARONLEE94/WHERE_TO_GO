// TS 유틸리티 타입
// Partial, Pick, Omit, Record

export interface Root {
  data: Data;
  status: number;
  statusText: string;
  headers: Headers;
  request: Request;
}

export interface Data {
  response: Response;
}

export interface Response {
  header: Header;
  body: Body;
}

export interface Header {
  resultCode: string;
  resultMsg: string;
}

export interface Body {
  items: Items;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface Items {
  item: Item[];
}

export interface Item {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
  zipcode: string;
}
