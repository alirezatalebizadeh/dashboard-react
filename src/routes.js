import Home from "./Components/Home/Home";
import UserList from "./Components/UserList/UserList";
import NewUser from "./Components/NewUser/NewUser";
import Products from "./Components/Products/Products";
import Product from "./Components/Products/Product/Product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/users", element: <UserList /> },
];

export default routes;
