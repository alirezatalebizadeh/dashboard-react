import { useRoutes } from "react-router-dom";
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="right__section">
          {router}
        </div>
      </div>
    </>
  );
}

export default App;
