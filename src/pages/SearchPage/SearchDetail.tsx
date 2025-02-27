import { useLocation } from "react-router";

const SearchDetail= () => {

  const location = useLocation();
  const { contentid, contenttypeid } = location.state || {};

  return (
    <div>
      <h1>SearchDetail</h1>
      <p>contentid: {contentid}</p>
      <p>contenttypeid: {contenttypeid}</p>
    </div>
  )
}

export default SearchDetail