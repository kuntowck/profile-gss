const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contoh kartu produk */}
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Product 1</h3>
            <p>High-quality product designed for you.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Product 2</h3>
            <p>Perfect solution for your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
