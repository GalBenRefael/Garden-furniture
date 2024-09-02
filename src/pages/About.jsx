import Footer from '../ui/Footer';

function About() {
  return (
    <>
      <div>
        <section className="bg-white py-16">
          <div className="max-w-screen-lg mx-auto px-6">
            <h1 className="text-5xl font-bold text-center text-green-800 mb-12">
              About Us
            </h1>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in the heart of Hampshire, Royalau is a family-owned
                business with a passion for creating luxurious and sustainable
                garden furniture. Our journey began with a simple idea: to
                design outdoor furniture that combines elegance, comfort, and
                durability. Over the years, weve grown from a small workshop to
                a renowned brand, known for our commitment to craftsmanship and
                quality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                At Royalau, we believe that your outdoor space should be a
                reflection of your style and a place where you can unwind and
                enjoy natures beauty. Thats why every piece of furniture we
                create is meticulously crafted using the finest materials,
                ensuring it stands the test of time while providing unparalleled
                comfort.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to transform outdoor spaces into luxurious
                retreats, where comfort meets style. We are dedicated to
                designing furniture that not only enhances your garden but also
                contributes to a sustainable future. By sourcing eco-friendly
                materials and implementing environmentally-conscious practices,
                we ensure that our products are as kind to the planet as they
                are beautiful.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
                Craftsmanship and Quality
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece of furniture at Royalau is handcrafted in our
                Hampshire workshop by skilled artisans who share our commitment
                to excellence. From selecting the finest cuts of oak to
                carefully assembling each piece, we pay attention to every
                detail to create furniture that exudes elegance and durability.
                Our range includes dining tables, outdoor sofas, garden benches,
                tree seats, sun loungers, and custom outdoor kitchens, all
                designed to elevate your outdoor living experience.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
                Sustainability
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sustainability is at the core of everything we do at Royalau. We
                believe in responsible sourcing and use sustainable materials to
                create our products. By partnering with suppliers who share our
                environmental values, we ensure that our furniture is not only
                beautiful but also minimizes its impact on the planet. From the
                oak we use to the eco-friendly finishes, every element of our
                furniture is chosen with sustainability in mind.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
                Customer Commitment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Royalau, our customers are at the heart of everything we do.
                We are dedicated to providing an exceptional shopping
                experience, from the moment you browse our collection to the day
                your furniture is delivered. Our team is here to help you every
                step of the way, ensuring that your outdoor space is transformed
                into the perfect retreat. We also offer bespoke services,
                allowing you to create custom pieces that fit your unique style
                and space.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
                Join the Royalau Family
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We invite you to explore our collection and discover the perfect
                pieces for your garden. Whether youre looking to create a cozy
                corner for relaxation or a stunning outdoor dining area, Royalau
                has the furniture to make your vision a reality. Thank you for
                choosing Royalau – where luxury, comfort, and sustainability
                meet.
              </p>
              <a
                href="/"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
