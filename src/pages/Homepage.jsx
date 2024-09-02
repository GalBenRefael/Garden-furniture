import { Link } from 'react-router-dom';
import Footer from '../ui/Footer';
import ProductsContainer from '../ui/ProductsContainer';

function Homepage() {
  return (
    <>
      <div>
        <header
          className="relative bg-green-500 text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2020/05/21/13/11/hanging-chair-5200722_1280.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-[#01514e91] opacity-80"></div>

          <div className="relative z-10">
            <h1 className="text-5xl uppercase">Luxury outdoor furniture</h1>
            <hr className="w-[5vw] m-auto mt-3 font-bold border-2 border-orange-500" />
            <p className="mt-4 text-xl">
              Discover the perfect furniture for your garden
            </p>
            <Link to="/products">
              <button className="mt-6 bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
                Shop Now
              </button>
            </Link>
          </div>
        </header>
      </div>
      <ProductsContainer />
      <Footer />
    </>
  );
}

export default Homepage;
