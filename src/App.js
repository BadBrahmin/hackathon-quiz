import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz.jsx";
import AddNewQuestion from "./components/AddNewQuestion";
import Admin from "./components/Admin";
import Questionlist from "./components/Questionlist";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/signin" component={SignIn} />
          <Route path="/admin/addnew" component={AddNewQuestion} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/Questionlist" component={Questionlist} />
          <Route render={() => <p>Not found</p>} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
