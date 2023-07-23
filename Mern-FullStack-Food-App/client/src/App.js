import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./display/Menu";
import Cart from "./display/Cart";
import Register from "./display/Register";
import Login from "./display/Login";
import Orders from "./display/Orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Menu} />
          <Route path="/cart" exact Component={Cart} />
          <Route path="/register" exact Component={Register}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/orders" exact Component={Orders}/>
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
