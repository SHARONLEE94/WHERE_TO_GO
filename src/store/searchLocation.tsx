import { create } from "zustand";
import { Item, Root } from "@/types/Search";
import axios from "../api/axios";
import requests from "../api/request";

interface SearchState {
  searchTerm: string;
  pageNo: number;
  localData: Item[];
  totalCount: number;
  isLoading: boolean;
  error: boolean;
  errorData: string;
  setSearchTerm: (term: string) => void;
  setPageNo: (page: number) => void;
  fetchSearchData: (searchTerm: string, pageNo: number) => Promise<void>;
}

const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  pageNo: 1,
  localData: [],
  totalCount: 0,
  isLoading: false,
  error: false,
  errorData: "",

  setSearchTerm: (term) => set({ searchTerm: term, pageNo: 1 }), // 🔹 검색어 변경 시 pageNo 초기화
  setPageNo: (page) => set({ pageNo: page }),

  fetchSearchData: async (searchTerm, pageNo) => {
    set({ isLoading: true, error: false });

    try {
      const result: Root = await axios.get(
        `${requests.fetchSearchKeyword1}?listYN=Y&arrange=A&keyword=${searchTerm}&numOfRows=10&pageNo=${pageNo}`
      );

      set({
        localData: result.data.response.body.items.item || [],
        totalCount: result.data.response.body.totalCount || 0,
      });

      window.scrollTo(0, 0); // 페이지 이동 시 스크롤 맨 위로
    } catch (e) {
      set({
        error: true,
        errorData: e instanceof Error ? e.message : "오류 발생",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
export default useSearchStore;
