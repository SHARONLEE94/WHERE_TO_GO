import { useState } from "react"
import { NavLink } from "react-router"
import { Button } from "./ui/button"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <NavLink to="/" className="text-xl font-bold" style={{ color: "#FFB7C5" }}>
            Korea Travel
          </NavLink>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <span className="sr-only">메뉴 열기</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]")}
            >
              홈
            </NavLink>
            <NavLink
              to="/destinations"
              className={({ isActive }) => (isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]")}
            >
              여행지
            </NavLink>
            <NavLink
              to="/accommodation"
              className={({ isActive }) => (isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]")}
            >
              숙소
            </NavLink>
            <NavLink
              to="/restaurants"
              className={({ isActive }) => (isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]")}
            >
              맛집
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]")}
            >
              문의하기
            </NavLink>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
              <nav className="flex flex-col p-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]"}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  홈
                </NavLink>
                <NavLink
                  to="/destinations"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]"}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  여행지
                </NavLink>
                <NavLink
                  to="/accommodation"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]"}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  숙소
                </NavLink>
                <NavLink
                  to="/restaurants"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]"}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  맛집
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-[#FFB7C5]" : "text-gray-600 hover:text-[#FFB7C5]"}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  문의하기
                </NavLink>
              </nav>
            </div>
          )}

          <Button className="bg-[#FFB7C5] hover:bg-[#ff9fb2]">로그인</Button>
      </div>
    </header>
    // <NavLink to="/event" end>GO TO EVENT</NavLink>
  )
}

export default Nav