import { TopBar } from "./components/TopBar";
import './assets/styles/app.css'
import { Home } from "./pages/home/Home";
import { WritePage } from "./pages/write/WritePage";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { SinglePost } from './components/SinglePost'
import { Register } from "./pages/register/Register";
function App() {
  const user = true;
  return (
    <BrowserRouter className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
        <Route path="/contact" component={Contact} />
        <Route path="/write" component={
          user ? WritePage : Home
        } />
        <Route path="/login" component={
          user ? Home : Login
        } />
        <Route path="/register" component={
          user ? Home : Register
        } />
        <Route path="/settings" component={
          user ? Settings : Register
        } />
        <Route path="/post/:postId" component={SinglePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
