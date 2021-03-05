import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/register";
import NotFound from "./components/notFound";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
