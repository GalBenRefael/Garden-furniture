import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../helpers/products.json'; // Adjust the path according to your project structure

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [mainImage, setMainImage] = useState(product?.images[0]); // Initial image is the first one

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 p-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left side: Big image with small images below */}
      <div className="flex flex-col items-center">
        <img
          className="w-full h-96 object-cover rounded-xl shadow-xl mb-8"
          src={mainImage} // Display the main image
          alt={product.name}
        />
        <div className="flex space-x-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              className={`w-24 h-24 object-cover cursor-pointer rounded-lg border-2 ${
                mainImage === img
                  ? 'border-orange-500'
                  : 'border-gray-300 hover:border-orange-500'
              }`}
              src={img}
              alt={`${product.name} ${index + 1}`}
              onClick={() => setMainImage(img)} // Update the main image on click
            />
          ))}
        </div>
      </div>

      {/* Right side: Product information */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {product.name}
          </h2>
          <p className="text-xl text-gray-500 mb-2 uppercase tracking-wide">
            {product.category}
          </p>
          <p className="text-4xl font-extrabold text-orange-500 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>
        </div>

        <Link to="/contact">
          <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-colors text-xl mt-4">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
