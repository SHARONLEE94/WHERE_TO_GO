import { BrowserRouter, Routes, Route } from "react-router";
import EventPage from "./pages/EventPage/EventPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/main" element={<MainPage />} /> */}
          <Route path="/event" element={<EventPage />} />
          <Route path="/:code/:rnum/:contentType" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App