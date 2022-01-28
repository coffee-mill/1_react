import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopPage from "./pages/topPage";
import ResultPage from "./pages/resultPage";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/search/:keyword" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
