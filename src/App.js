import AppNavbar from "./components/navbar/navbar";
import ProductView from "./components/productLayout/productView/productView";
import { clothingItems } from "./models/clothingItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ProductView clothingItems={clothingItems} />
    </div>
  );
}

export default App;
