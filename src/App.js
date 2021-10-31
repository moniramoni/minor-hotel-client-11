import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Homepage/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import SignIn from './Pages/Login/SignIn/SignIn';
import AuthProvider from './contexts/AuthProvider';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddServices from './Pages/AddServices/AddServices';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrder from './Pages/MyOrder/MyOrder';


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
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/placeOrder/:serviceId">
                <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/addServices">
                <AddServices></AddServices>
            </Route>
            <Route path="/manageOrders">
                <ManageOrders></ManageOrders>
            </Route>
            <Route path="/myOrder">
                <MyOrder></MyOrder>
            </Route>
            <Route path="/login">
                <SignIn></SignIn>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
