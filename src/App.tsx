import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BaseLayout from "./components/layouts/BaseLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
