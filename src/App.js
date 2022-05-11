import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/line">
          <Line />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
