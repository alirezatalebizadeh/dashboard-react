import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      {router}
    </>
  );
}

export default App;
