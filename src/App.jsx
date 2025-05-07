import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-600">BayramGo</h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pink-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              to="hero"
              smooth
              duration={500}
              className="cursor-pointer hover:text-pink-500"
            >
              Bosh sahifa
            </Link>
            <Link
              to="about"
              smooth
              duration={500}
              className="cursor-pointer hover:text-pink-500"
            >
              Biz haqimizda
            </Link>
            <Link
              to="services"
              smooth
              duration={500}
              className="cursor-pointer hover:text-pink-500"
            >
              Xizmatlar
            </Link>
            <Link
              to="gallery"
              smooth
              duration={500}
              className="cursor-pointer hover:text-pink-500"
            >
              Galereya
            </Link>
            <Link
              to="booking"
              smooth
              duration={500}
              className="cursor-pointer hover:text-pink-500"
            >
              Buyurtma
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer hover:text-pink-500"
            >
              Bog'lanish
            </Link>
          </nav>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden bg-white shadow px-4 pb-4 space-y-2">
            <Link
              to="hero"
              smooth
              duration={500}
              className="block cursor-pointer hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Bosh sahifa
            </Link>
            <Link
              to="about"
              smooth
              duration={500}
              className="block cursor-pointer hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Biz haqimizda
            </Link>
            <Link
              to="services"
              smooth
              duration={500}
              className="block cursor-pointer hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Xizmatlar
            </Link>
            <Link
              to="gallery"
              smooth
              duration={500}
              className="block cursor-pointer hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Galereya
            </Link>
            <Link
              to="booking"
              smooth
              duration={500}
              className="block cursor-pointer hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Buyurtma
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="block cursor-pointer hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Bog'lanish
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white text-center px-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Bayramlaringizga bayramona kayfiyat olib kelamiz!
        </h2>
        <p className="text-xl md:text-2xl mb-6">
          Tug‘ilgan kun, toy, korporativ va boshqa tadbirlar uchun to‘liq
          xizmatlar
        </p>
        <Link
          to="booking"
          smooth
          duration={500}
          className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-100 transition"
        >
          Buyurtma berish
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-4">Biz haqimizda</h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          BayramGo kompaniyasi sizning eng muhim kunlaringizni unutilmas
          qiluvchi professional tashkilotchilar jamoasidir. 5 yillik tajriba,
          300+ muvaffaqiyatli tadbirlar!
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-10">
          Xizmatlarimiz
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            "Tug‘ilgan kunlar",
            "Toy marosimlari",
            "Korporativ tadbirlar",
            "Animatorlar",
            "Dekoratsiya",
            "Foto/Video xizmatlar",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-pink-200 transition"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {service}
              </h4>
              <p className="text-gray-600">
                Professional xizmat, ijodiy yondashuv va unutilmas taassurotlar
                kafolati!
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-10">Galereya</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={`https://www.northshore.org/globalassets/healthy-you/blog/2018/festival-safety.jpg`}
                alt="Bayram"
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-10">
          Buyurtma berish
        </h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Tadbir haqida qisqacha"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Yuborish
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-6">Bog'lanish</h3>
        <p className="text-lg text-gray-700 mb-4">
          Telefon:{" "}
          <a href="tel:+998901234567" className="text-pink-600 hover:underline">
            +998 90 123 45 67
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Email:{" "}
          <a
            href="mailto:info@bayramgo.uz"
            className="text-pink-600 hover:underline"
          >
            info@bayramgo.uz
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Manzil: Toshkent, O'zbekiston
        </p>
        <div className="max-w-4xl mx-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47972.077526887176!2d69.2008255092211!3d41.31108128580268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2934fc67c5%3A0x350b52c799c4c9ee!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1682438493800!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0 rounded-lg w-full h-80"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} BayramGo. Barcha huquqlar
          himoyalangan.
        </p>
      </footer>
    </div>
  );
}
