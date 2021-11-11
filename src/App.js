// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Contex/AuthProvider';
// import PrivateRaute from './Pages/PrivateRaute/PrivateRaute'
import SingUp from './Pages/Register/SingUp/SingUp';
import SingIn from './Pages/Register/SingIn/SingIn';
import Header from "./Pages/Share/Header/Header";
import Footer from './Pages/Share/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              {/* <Home></Home> */}
            </Route>
            {/* <PrivateRaute path="/placeorder">
             
            </PrivateRaute>
            <PrivateRaute path="/addproduct">
         
            </PrivateRaute>
            <PrivateRaute path="/manageallproduct">
             
            </PrivateRaute>
            <PrivateRaute path="/placeorder:id">
     
            </PrivateRaute> */}
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
