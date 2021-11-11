// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Contex/AuthProvider';
import PrivateRaute from './Pages/PrivateRoute/PrivateRaute'
import SingUp from './Pages/Register/SingUp/SingUp';
import SingIn from './Pages/Register/SingIn/SingIn';
import Header from "./Pages/Share/Header/Header";
import Footer from './Pages/Share/Footer/Footer';
import AddProduct from './Pages/Dashbord/Admin/AddProduct/AddProduct';
import Purchase from './Pages/Purchase/Purchase';
import Home from './Pages/HomePage/Home/Home';
import AllProducts from './Pages/Explore/AllProducts/AllProducts';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRaute path="/addproducts">
              <AddProduct></AddProduct>
            </PrivateRaute>
            <PrivateRaute path="/purchase:id">
              <Purchase></Purchase>
            </PrivateRaute>
            <Route path="/singin">
              <SingIn></SingIn>
            </Route>
            <Route path="/singup">
              <SingUp></SingUp>
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
