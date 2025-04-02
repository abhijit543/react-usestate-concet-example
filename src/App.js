import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Myuser from "./basic/user";
import Myproduct from "./basic/product";
import Mycustomer from "./basic/customer";
import ItemList from "./basic/item";
import MyHookOne from "./hooks/hook1";
import MyHookTwo from "./hooks/hook2";
import MyHookThree from "./hooks/hook3";
import MyHookFour from "./hooks/hook4";
import CityApi from "./api/cityapi";
import MyBlogApi from "./api/blogapi";
import MyContatct from "./api/contactapi";

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/userlist" className="toplink">
          Manage User
        </Link>
        <Link to="/productlist" className="toplink">
          Manage Product
        </Link>
        <Link to="/" className="toplink">
          Manage Customer
        </Link>
        <Link to="/props" className="toplink">
          Props
        </Link>
        <Link to="/hook1" className="toplink">
          H-1
        </Link>
        <Link to="/hook2" className="toplink">
          H-2
        </Link>
        <Link to="/hook3" className="toplink">
          H-3
        </Link>
        <Link to="/api1" className="toplink">
          City Api
        </Link>
        <Link to="/api2" className="toplink">
          Blog Api
        </Link>
        <Link to="/api3" className="toplink">
          Validation
        </Link>
      </nav>

      <Routes>
        <Route exact path="/api3" element={<MyContatct />} />
        <Route exact path="/api2" element={<MyBlogApi />} />
        <Route exact path="/api1" element={<CityApi />} />
        <Route exact path="/hook4/:name/:price/:seller" element={<MyHookFour />} />
        <Route exact path="/hook3" element={<MyHookThree />} />
        <Route exact path="/hook2" element={<MyHookTwo />} />
        <Route exact path="/hook1" element={<MyHookOne />} />
        <Route exact path="/" element={<Mycustomer />} />
        <Route exact path="/userlist" element={<Myuser />} />
        <Route exact path="/productlist" element={<Myproduct />} />
        <Route exact path="/props" element={<ItemList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
   Myuser(); in js 
   <Myuser/> in jsx 
*/
