import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Typed from "react-typed";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products based on search query
  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchQuery]);

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // Delay the start of typing animation by 1000 milliseconds

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  const typedStrings = ["Buy Now", "Think Later"];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-6xl font-semibold mb-10 text-center my-20">
            {startTyping && (
              <Typed strings={typedStrings} typeSpeed={80} backSpeed={60} loop />
            )}
          </h1>
          <div className="flex justify-center mb-10">
            <input
              type="text"
              placeholder="Search for a product..."
              value={searchQuery}
              onChange={handleSearchChange}
              className=" w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
