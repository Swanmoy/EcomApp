import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home.component.js";
import Header from "./Components/header.component.js";
import Login from "./Components/login.component.js";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider.js";
import Checkout from "./Components/checkout.component.js";

function App() {
  console.log(useStateValue());
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser.email);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser.email,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
