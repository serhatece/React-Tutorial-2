import Header from "./components/Header";
import ProductList from "./components/PrdouctList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}
