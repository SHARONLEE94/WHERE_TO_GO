import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../../api/request";
import { Item } from "@/types/Search";

const DetailPage = () => {
  const { code, rnum, contentType } = useParams();
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${requests.fetchAreaBasedList1}&contentTypeId=${contentType}&areaCode=${code}&sigunguCode=${rnum}`
      );
      setData(result.data.response.body.items.item);
    };
    fetchData();
  }, [code, rnum, contentType]);

  return (
    <div>
      <h1>Detail Page</h1>
      <div>
        {data.map((data) => {
          return (
            <div key={data.contentid} className="detailPage">
              <h3>{data.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
