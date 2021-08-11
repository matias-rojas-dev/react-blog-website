import { TopBar } from "./components/TopBar";
import './assets/styles/app.css'
import { Home } from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
