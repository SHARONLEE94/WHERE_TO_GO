const requests = {
  fetchLocationBase: "/locationBasedList1", // 위치기반 관광정보조회
  fetchSearchKeyword1: "/searchKeyword1", // 키워드 검색 조회
  fetchSearchFestival1: "/searchFestival1", // 행사정보조회
  fetchSearchStay1: "/searchStay1", // 숙박정보조회
  fetchDetailCommon1: "/detailCommon1", // 공통정보조회
  fetchDetailIntro1: "/detailIntro1", // 소개정보조회
  fetchDetailInfo1: "/detailInfo1", // 반복정보 조회
  fetchDetailImage1: "/detailImage1", // 이미지 정보 조회
  fetchAreaBasedSyncList1: "/areaBasedSyncList1", // 관광정보 동기화 목록 조회
  fetchAreaCode1: "/areaCode1", // 지역 코드 조회
  fetchDetailPetTour: "/detailPetTour", // 반려동물 동반 여행 정보
  fetchCategoryCode1: "/categoryCode1", // 서비스 분류 코드 조회
  fetchAreaBasedList1: "/areaBasedList1?arrange=A", // 지역기반 관광정보 조회 // A: 제목순 C: 수정일순 D:생성일순
}

export default requests;