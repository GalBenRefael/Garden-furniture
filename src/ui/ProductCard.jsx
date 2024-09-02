/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
        <img
          className="w-full h-48 object-cover"
          src={product.images[0]}
          alt={product.name}
        />
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-orange-500">
            Starting from ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
