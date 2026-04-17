import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-24">
      <div className="flex w-full flex-col gap-12">
        <section className="border-4 border-dark-gold-600/40 bg-gradient-to-r from-dark-blue-50/90 via-white/80 to-dark-gold-50/90 backdrop-blur-xl px-12 py-20 sm:px-16 lg:px-24 rounded-3xl shadow-2xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.5em] text-gray-700">
            Professional Inventory
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-gray-900 drop-shadow-xl sm:text-6xl lg:text-7xl">
            Executive Business Collection
          </h1>
          <p className="mt-12 max-w-3xl text-xl leading-relaxed text-gray-700">
            Curated selection of precision-engineered professional essentials for business students, career professionals, and executive development. Each product meets corporate standards for quality, durability, and professional presentation.
          </p>
          <div className="mt-16">
            <Button to="/" className="px-12 py-6 text-xl font-black bg-white border-4 border-dark-blue-600 text-dark-blue-900 hover:bg-dark-blue-50 hover:border-dark-gold-600 shadow-2xl rounded-3xl font-mono tracking-wide">
              ← Return to Main Collection
            </Button>
          </div>
        </section>

        <section className="border-4 border-dark-blue-600/30 bg-gradient-to-b from-dark-gold-50/90 via-white/70 backdrop-blur-xl px-12 py-24 sm:px-16 lg:px-24 rounded-3xl shadow-2xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <p className="text-lg font-bold uppercase tracking-[0.4em] text-gray-700 mb-6">
              Complete Catalogue
            </p>
            <h2 className="text-4xl font-black text-gray-900 drop-shadow-lg sm:text-5xl">
              Professional Product Matrix
            </h2>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <ProductList products={products} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductListPage;

