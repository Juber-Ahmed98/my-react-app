import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Juber Store</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("shop")}>Products</button>
          <button onClick={() => setPage("basket")}>Basket</button>
          <button onClick={() => setPage("login")}>Login</button>
        </nav>
      </header>

      {/* Page Content */}
      <main className="main">
        {page === "home" && <Home />}
        {page === "shop" && <Shop />}
        {page === "basket" && <Basket />}
        {page === "login" && <Login />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Footer placeholder</p>
      </footer>
    </div>
  );
}

/* ---------- Pages ---------- */

function Home() {
  return (
    <div>
      <h2>Welcome to Juber Store</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia
        alias iste enim iusto est illum suscipit sapiente eaque, quas ut, sed
        odio rem earum fugiat dolorem quam ad voluptas?
      </p>

      <div className="hero">
        <div className="hero-box">
          <p>Featured Product</p>
        </div>
      </div>
    </div>
  );
}

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      // asks backend for the data that we set to the port 3000 and path /products
      const res = await fetch("http://localhost:3000/products");
      // return raw http response as an array
      const productsData = await res.json();

      console.log(productsData);
      setProducts(productsData);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Shop Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <p>{product.name}</p>
            <p>£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Basket() {
  return (
    <div>
      <h2>Your Basket</h2>

      <div className="basket-box">
        <p>Basket Item Placeholder</p>
      </div>
      <div className="basket-summary">
        <p>Total: £0.00</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>

      <div className="login-box">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p className="login-alt">Don't have an account? Register</p>
      </div>
    </div>
  );
}

export default App;
