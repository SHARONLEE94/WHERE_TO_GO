import { useLocation } from "react-router";

const useSearchParmas = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

export default useSearchParmas;
