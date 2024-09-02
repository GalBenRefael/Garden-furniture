function Footer() {
  return (
    <div>
      <footer className="bg-[#01514e] text-white py-8">
        <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Royalau</h3>
            <p>
              At Royalau, we believe in creating luxurious and sustainable
              garden furniture that transforms your outdoor space into an oasis
              of comfort and style. Crafted with passion, each piece is designed
              to withstand the test of time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Royalau Garden Furniture</p>
            <p className="mb-2">Hampshire, UK</p>
            <p className="mb-2">
              Email:{' '}
              <a href="mailto:info@royalau.com" className="hover:underline">
                info@royalau.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+441234567890" className="hover:underline">
                +44 1234 567890
              </a>
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block text-gray-400 hover:text-white mx-2"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="#"
                className="inline-block text-gray-400 hover:text-white mx-2"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="#"
                className="inline-block text-gray-400 hover:text-white mx-2"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="max-w-screen-lg mx-auto px-4 text-center">
            <p>&copy; 2024 Royalau. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
