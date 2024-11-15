// import React from "react";
// import Title from "../../ui/Title";
// import Container from "../../ui/Container";
// import { carsInfo } from "../../constants";
// import ServiceCard from "./ServiceCard";
// const Services = () => {
//   return (
//     <div>
//       <section className="p-5 md:p-16 dark:bg-slate-700 ">
//         <Container>
//           <Title
//             title="Our Services"
//             subtitle="We offer a wide range of services to help you find the perfect services for your needs."
//           />
//           <div className="flex flex-col md:flex-row gap-5 ">
//             {carsInfo.map((data, index) => (
//               <ServiceCard key={index} data={data} />
//             ))}
//           </div>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Services;
//////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Title from "../../ui/Title";
// import Container from "../../ui/Container";
// import ServiceCard from "./ServiceCard";
// import axios from "axios";

// const Services = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/homeproduct`
//         );
//         setProducts(response.data.products);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center p-5">Loading...</div>;
//   if (error)
//     return <div className="text-center p-5 text-red-500">Error: {error}</div>;

//   return (
//     <div>
//       <section className="p-5 md:p-16 dark:bg-slate-700">
//         <Container>
//           <Title
//             title="Our Products"
//             subtitle="Explore our wide range of products designed to meet your needs."
//           />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {products.map((product) => (
//               <ServiceCard key={product._id} data={product} />
//             ))}
//           </div>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Services;
/////////////////////////////////////
// Services.jsx
import React, { useState, useEffect } from "react";
import Title from "../../ui/Title";
import Container from "../../ui/Container";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/homeproduct`
        );
        setProducts(response.data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - productsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + productsPerPage, products.length - productsPerPage)
    );
  };

  if (loading) return <div className="text-center p-5">Loading...</div>;
  if (error)
    return <div className="text-center p-5 text-red-500">Error: {error}</div>;

  return (
    <div>
      <section className="p-5 md:p-16 dark:bg-slate-700">
        <Container>
          <Title
            title="Our Products"
            subtitle="Explore our wide range of products designed to meet your needs."
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 lg:flex-row">
              {products
                .slice(startIndex, startIndex + productsPerPage)
                .map((product) => (
                  <ServiceCard key={product._id} data={product} />
                ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-6">
              <button
                className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
                onClick={handlePrevious}
                disabled={startIndex === 0}
              >
                <FaArrowLeftLong />
              </button>
              <button
                className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
                onClick={handleNext}
                disabled={startIndex + productsPerPage >= products.length}
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;
