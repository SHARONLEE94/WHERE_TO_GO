import { BrowserRouter, Routes, Route } from "react-router";
import EventPage from "./pages/EventPage/EventPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchResults from "./components/SearchResPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/main" element={<MainPage />} /> */}
            <Route path="/event" element={<EventPage />} />
            <Route path="/:code/:rnum/:contentType" element={<DetailPage />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App