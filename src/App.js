import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import { Header } from "./containers/header/Header";
import { InfoPage } from "./pages/infoPage";
import { WorkPage } from "./pages/workPage";
import { SkillPage } from "./pages/skillPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InfoPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="skill" element={<SkillPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
