import ProductCard from "./components/ProductCard";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 120,
      image: "https://via.placeholder.com/150",
      description: "High quality wireless sound.",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 80,
      image: "https://via.placeholder.com/150",
      description: "Track your fitness and health.",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: 60,
      image: "https://via.placeholder.com/150",
      description: "Portable and powerful sound.",
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: 45,
      image: "https://via.placeholder.com/150",
      description: "Precision and speed for gamers.",
    },
  ];

  return (
    <SectionWrapper>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </SectionWrapper>
  );
}

export default App;
