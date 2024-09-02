import Footer from '../ui/Footer';

function Contact() {
  return (
    <>
      <div>
        <section className="bg-gray-100 py-16">
          <div className="max-w-screen-lg mx-auto px-6">
            <h1 className="text-5xl font-extrabold text-center text-green-800 mb-12">
              Contact Us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  We’d love to hear from you! Whether you have a question about
                  our products, need assistance, or want to discuss a custom
                  order, we’re here to help. Please use the form to reach out,
                  or get in touch using the details below.
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Address:</strong> Royalau Garden Furniture, Hampshire,
                  UK
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@royalau.com"
                    className="text-green-600 hover:underline"
                  >
                    info@royalau.com
                  </a>
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+441234567890"
                    className="text-green-600 hover:underline"
                  >
                    +44 1234 567890
                  </a>
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block text-gray-600 hover:text-green-800 mx-2"
                  >
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="inline-block text-gray-600 hover:text-green-800 mx-2"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="inline-block text-gray-600 hover:text-green-800 mx-2"
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Please mention the product you want"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 px-6 pt-6">
                Visit Us
              </h2>
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.95592831531662!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f617b30ff5b!2sRoyal%20Botanic%20Gardens%20Victoria!5e0!3m2!1sen!2sus!4v1638925792520!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
