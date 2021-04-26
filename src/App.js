import "./App.css";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigation-menu/NavigationMenu";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
