import AllProductsContainer from '../ui/AllProductsCon';
import Footer from '../ui/Footer';

function Products() {
  return (
    <>
      <div>
        <div className="relative w-full h-96">
          <img
            src={
              'https://www.gazeburvill.com/content/uploads/2021/10/Splash-outdoor-sofa-and-armchairs-jpg.webp'
            }
            alt="Luxury Outdoor Furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">
              Our Full Collection
            </h1>
          </div>
        </div>

        {/* Products Container */}
        <div className="py-12">
          <AllProductsContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
