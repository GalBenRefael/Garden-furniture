import products from '../helpers/products.json';
import ProductCard from './ProductCard';

const AllProductsContainer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center p-4 max-w-screen-xl">
        <h2 className="text-4xl mt-5 mb-4">Explore Our Entire Collection</h2>
        <p className="text-lg font-thin">
          Discover our full range of luxury garden furniture and outdoor
          kitchens, crafted for elegance, comfort, and sustainability. Browse
          through our entire collection to find the perfect pieces for your
          outdoor space.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 w-4/5 max-w-screen-xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsContainer;
