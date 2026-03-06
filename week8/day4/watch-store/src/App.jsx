import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const watches = [
    {
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
      name: "Rolex Classic",
      price: 500,
      inStock: true,
      isNew: true,
    },
    {
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      name: "Sport Watch",
      price: 200,
      inStock: true,
      isNew: false,
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      name: "Luxury Gold",
      price: 750,
      inStock: false,
      isNew: true,
    },
    {
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
      name: "Apple Style",
      price: 400,
      inStock: true,
      isNew: false,
    },
    {
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
      name: "Classic Leather",
      price: 150,
      inStock: true,
      isNew: true,
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      name: "Modern Black",
      price: 320,
      inStock: false,
      isNew: false,
    },
    {
      image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6",
      name: "Minimal Watch",
      price: 120,
      inStock: true,
      isNew: false,
    },
    {
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      name: "Diamond Edition",
      price: 950,
      inStock: true,
      isNew: true,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="products">
        {watches.map((watch, index) => (
          <ProductCard
            key={index}
            image={watch.image}
            name={watch.name}
            price={watch.price}
            inStock={watch.inStock}
            isNew={watch.isNew}
          />
        ))}
      </section>

      <Footer />
    </>
  );
}

export default App;
