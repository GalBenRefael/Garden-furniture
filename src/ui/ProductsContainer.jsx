import products from '../helpers/products.json';
import ProductCard from './ProductCard';

const ProductsContainer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center p-4 max-w-screen-xl">
        <h2 className="text-4xl mt-5 mb-4">
          LUXURY GARDEN FURNITURE & OUTDOOR KITCHENS
        </h2>
        <p className="text-lg font-thin">
          Our passion for design, comfort and sustainability is at the heart of
          each piece of outdoor furniture we create. Crafted at our Hampshire
          workshop, our furniture collection offers an array of dining tables
          and outdoor seating, including outdoor sofas, garden benches, tree
          seats and sun loungers, as well as the best-appointed craftsman-made
          outdoor kitchens using the finest cuts of Oak.
        </p>
      </div>
      <div className="text-lg mt-10">Our Top Selling Products</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 w-4/5 max-w-screen-xl">
        {products.slice(0, 9).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
