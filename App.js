import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="bg-black text-white py-6 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">StyleWear</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="relative bg-gray-100 h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Elevate Your Style with Every Stitch</h2>
          <div className="space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded">Shop Men</button>
            <button className="border border-black text-black px-4 py-2 rounded">Shop Women</button>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Featured Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Men", "Women", "Kids", "Accessories"].map((category) => (
            <div key={category} className="bg-gray-100 rounded shadow hover:shadow-lg p-4 text-center cursor-pointer">
              <div className="h-32 bg-gray-300 rounded mb-2"></div>
              <p className="font-medium">{category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-8 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-8">New Arrivals</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded shadow hover:shadow-lg p-4 text-center">
              <div className="h-40 bg-gray-300 rounded mb-2"></div>
              <h4 className="text-lg font-medium">Product Name</h4>
              <p className="text-sm text-gray-500">$49.99</p>
              <button className="mt-2 w-full bg-black text-white py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-12 px-8 text-center">
        <h3 className="text-2xl mb-4">Stay in Style</h3>
        <p className="mb-6">Sign up for exclusive offers and updates</p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <input placeholder="Enter your email" className="bg-white text-black p-2 rounded w-full" />
          <button className="bg-white text-black px-4 py-2 rounded">Subscribe</button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-bold text-lg mb-2">StyleWear</h4>
            <p className="text-sm">Quality garments that define your style.</p>
          </div>
          <div className="mt-4 md:mt-0 space-y-1">
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="text-center text-sm mt-6">© 2025 StyleWear. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
