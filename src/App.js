import "./App.css";
import Explore from "./components/explore/Explore";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Future from "./components/future/Future";
import Header from "./components/header/Header";
import Support from "./components/support/Support";

function App() {
  return (
    <div className="App">
      <Header />
      <Explore />
      <Featured />
      <Future />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
