import { TopBar } from "./components/TopBar";
import './assets/styles/app.css'
import { Home } from "./pages/home/Home";
import { WritePage } from "./pages/write/WritePage";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={WritePage} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
