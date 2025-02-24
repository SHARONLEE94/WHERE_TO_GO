# 🌍 여행정보 앱

여행지 정보를 검색하고, 추천 여행지를 확인할 수 있는 React 기반의 웹 애플리케이션입니다.

## 🚀 프로젝트 개요
- **프로젝트명:** 여행정보 앱
- **설명:** 여행지 정보를 제공하고 필터링 및 추천 기능을 포함한 여행 정보 서비스 제공
- **개발 기간:** YYYY-MM-DD ~ YYYY-MM-DD
- **배포:** (배포 URL 추가하기)

---

## 🛠 기술 스택

### **프론트엔드**
- **React** (Vite 기반)
- **React Router** (페이지 이동)
- **Tailwind** (스타일 프레임워크)
- **dotenv** (환경 변수 관리)

### **백엔드 (추후 추가 가능)**

### **API 사용**
- 공공데이터 API 활용 [(링크)](https://www.data.go.kr/data/15101578/openapi.do#/tab_layer_detail_function)
- axios로 **serviceKey** 관리시 주의사항 : "디코딩" 값으로 넣어야 함 >> 인코딩 데이터 사용시 한 번 더 인코딩하기 때문에 serviceKey를 올바르게 인식하지 못함

---

## Tailwind CSS와 shadcn/ui
**Tailwind** [(링크)] (https://tailwindcss.com/)
**shadcn/ui** [(링크)] (https://ui.shadcn.com/)

### Tailwind CSS
 유틸리티 기반의 CSS 프레임워크로, 클래스를 조합해서 스타일을 빠르게 적용할 수 있음음. 예를 들어, p-4 bg-blue-500 text-white 같은 클래스를 HTML 요소에 추가하면, 패딩, 배경색, 글자색을 한 번에 설정 가능.
### shadcn/ui
Tailwind를 기반으로 한 UI 컴포넌트 라이브러리. 즉, 버튼, 입력 필드, 모달, 드롭다운 같은 UI 컴포넌트들을 미리 Tailwind 스타일로 만들어 제공. 덕분에 디자인 시스템을 직접 구현할 필요 없이, 기존 컴포넌트를 가져와서 커스터마이징 가능.
### 정리
- Tailwind CSS는 스타일을 직접 정의하는 도구.
- shadcn/ui는 Tailwind를 활용해서 스타일이 적용된 UI 컴포넌트들을 모아둔 라이브러리.
- 즉, shadcn/ui를 사용하면 Tailwind로 스타일을 일일이 작성하지 않아도 되고, 필요하면 커스터마이징 가능.
``` tsx
// 예제 코드 (shadcn/ui + Tailwind 사용)
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
      클릭하세요
    </Button>
  );
}
```
위처럼 shadcn/ui의 Button 컴포넌트를 가져와서 Tailwind 클래스를 추가해서 스타일을 변경 가능!
✅ 결론: shadcn/ui는 Tailwind를 기반으로 만들어진 컴포넌트 모음집이므로, 둘은 서로 보완하는 관계

---