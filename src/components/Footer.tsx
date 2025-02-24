import { Link } from "react-router"


const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#FFB7C5" }}>
            WEHERE_TO_GO
            </h4>
            <p className="text-sm text-gray-600">여행의 모든 순간을 함께할 당신만의 가이드</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">회사 소개</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-[#FFB7C5]">
                  소개
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#FFB7C5]">
                  채용
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#FFB7C5]">
                  뉴스
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">고객 지원</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/help" className="hover:text-[#FFB7C5]">
                  도움말
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFB7C5]">
                  문의하기
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="hover:text-[#FFB7C5]">
                  예약 확인
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">법적 고지</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/terms" className="hover:text-[#FFB7C5]">
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#FFB7C5]">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-[#FFB7C5]">
                  쿠키 정책
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} WEHERETOGO. All rights reserved. BY RONLEEDA
        </div>
      </div>
    </footer>
  )

}

export default Footer

