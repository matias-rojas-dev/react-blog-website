import { TopBar } from "./components/TopBar";
import './assets/styles/app.css'
import { Home } from "./pages/home/Home";
import { WritePage } from "./pages/write/WritePage";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
function App() {
  return (
    <BrowserRouter className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
        <Route path="/contact" component={Contact} />
        <Route path="/write" component={WritePage} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
