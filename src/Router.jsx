import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TestPage from "./pages/testPage";
import ResultPage from "./pages/resultPage";

export default function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>;
}
