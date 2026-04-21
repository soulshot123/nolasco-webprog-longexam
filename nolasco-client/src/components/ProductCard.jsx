import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group rounded-3xl border-4 border-gold-500/80 bg-gradient-to-br from-slate-50 via-white to-gray-50 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-3xl hover:border-gold-600 hover:-translate-y-2">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-gold-50/80 shadow-xl border-4 border-white/50">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full rounded-3xl object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" 
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-gold-100/90 to-blue-100/90 border-4 border-white shadow-2xl text-sm font-black uppercase tracking-widest text-blue-900 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
            Pro<br/>Item
          </div>
        )}
        <div className="absolute -inset-2 bg-gradient-to-r from-gold-500/20 to-blue-500/20 rounded-4xl blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      
      <div className="mt-8 space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-700 font-mono">
          {product.category} 0{index + 1}
        </p>
        <h3 className="text-2xl font-black text-gold-700 leading-tight line-clamp-2 group-hover:text-gold-500 transition-colors">
          {product.title}
        </h3>
        <p className="text-2xl font-black text-gold-700 tracking-tight drop-shadow-sm">
          {product.price}
        </p>
        <p className="text-base leading-relaxed text-gray-700 line-clamp-3 pr-2">
          {product.content[0]}
        </p>
        <Button 
          to={`/products/${product.name}`} 
          className="w-full bg-white border-2 border-gold-500/70 text-blue-900 px-8 py-4 text-base font-bold uppercase tracking-wide shadow-lg hover:bg-gold-50 hover:border-blue-600 hover:text-blue-900 hover:shadow-2xl transition-all duration-300 font-mono rounded-2xl"
        >
          Explore Product →
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
