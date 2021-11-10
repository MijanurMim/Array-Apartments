import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Apartments from "./pages/Apartments/Apartments/Apartments";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";
import Footer from "./pages/Shared/Footer/Footer";
import Navigation from "./pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/apartments">
              <Apartments></Apartments>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
