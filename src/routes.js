import Home from "./Components/Home/Home";
import UserList from "./Components/UserList/UserList";
import NewUser from "./Components/NewUser/NewUser";
import Products from "./Components/Products/Products";
import Product from "./Components/Products/Product/Product";
import Todos from "./Components/Todos/Todos";
import Menus from "./Components/Menus/Menus";
import { Menu } from "@mui/material";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/todos", element: <Todos /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/users", element: <UserList /> },
  { path: "/menus", element: <Menus /> },
];

export default routes;
