import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import goldToteBag from '../../assets/img/goldtotebag.jpg';
import executiveNotebook from '../../assets/img/Executivenotebook.jpg';
import businessApparel from '../../assets/img/businessapparel.png';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            {/* Hero Section */}
            <section className="relative min-h-[32rem] overflow-hidden rounded-3xl border-4 border-dark-gold-700/50 bg-gradient-to-r from-dark-gold-900 via-dark-blue-900 to-dark-gold-900 px-6 py-12 sm:px-8 lg:px-12 shadow-2xl">
                <img
                    src={banner}
                    alt="Premium Campus Store"
                    className="absolute inset-0 h-full w-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-gold-900/70 via-dark-blue-900/60 to-dark-gold-900/70" />

                <div className="relative z-10 flex min-h-[26rem] items-center justify-end text-right lg:min-h-[28rem]">
                    <div className="max-w-2xl space-y-6">
                        <p className="text-sm font-bold uppercase tracking-[0.4em] text-amber-500 drop-shadow-lg">
                            Professional Campus Essentials
                        </p>
                        <h1 className="text-4xl font-black leading-[1.1] text-amber-500 drop-shadow-2xl sm:text-5xl lg:text-6xl">
                            Welcome to Bulldogs Exchange Shop!
                        </h1>
                        <p className="text-lg leading-relaxed text-amber-300 font-bold max-w-lg">
                            High Quality apparrel, tools, storage, and souvenirs that works.
                        </p>
                        <div className="flex flex-wrap justify-end gap-4">
                            <Button to="/products" className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-dark-gold-500 to-dark-blue-600 hover:from-dark-gold-600 hover:to-dark-blue-700 shadow-xl">
                                Shop Collection
                            </Button>
                            <Button to="/about" variant="primary" className="px-8 py-4 text-lg font-bold border-2 border-dark-gold-400/50 bg-dark-gold-900/20 backdrop-blur-sm hover:bg-dark-gold-50">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-4 border-dark-gold-700/30 bg-gradient-to-b from-dark-blue-50 to-dark-gold-50/50 px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 rounded-3xl shadow-2xl">
                <div className="mb-12 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.4em] text-dark-blue-700 mb-4">
                        Business Performance
                    </p>
                    <h2 className="text-3xl font-black bg-gradient-to-r from-dark-gold-900 to-dark-blue-900 bg-clip-text text-transparent mb-2 sm:text-4xl">
                        Professional Statistics
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group rounded-3xl border-2 border-gold-500/70 bg-dark-gold-50/80 backdrop-blur-md p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <p className="text-4xl font-black text-black mb-3">
                            08
                        </p>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-dark-blue-700 group-hover:text-dark-gold-700 transition-colors">
                            Products
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-gold-500/70 bg-dark-gold-50/80 backdrop-blur-md p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <p className="text-4xl font-black text-black mb-3">
                            07
                        </p>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-dark-blue-700 group-hover:text-dark-gold-700 transition-colors">
                            Categories
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-gold-500/70 bg-dark-gold-50/80 backdrop-blur-md p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <p className="text-4xl font-black text-black mb-3">
                            156
                        </p>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-dark-blue-700 group-hover:text-dark-gold-700 transition-colors">
                            Orders
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-gold-500/70 bg-dark-gold-50/80 backdrop-blur-md p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <p className="text-4xl font-black text-gold-700 mb-3">
                            12
                        </p>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-dark-blue-700 group-hover:text-dark-gold-700 transition-colors">
                            Slots Available
                        </p>
                    </div>
                </div>
            </section>

            {/* Collections Section */}
            <section className="border-4 border-dark-blue-700/30 bg-gradient-to-b from-dark-gold Ascent-50 to-dark-blue-50/50 px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 rounded-3xl shadow-2xl">
                <div className="mb-16 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.4em] Ascent text-dark-gold-700 mb-4">
                        Categories
                    </p>
                    <h2 className="text-3xl font-black bg-gradient-to-r from-dark-blue-900 to-dark-gold-900 bg-clip-text text-transparent mb-2 sm:text-4xl">
                        Business Essential Collections
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <article className="group rounded-3xl border Ascent-2 border-dark-gold-600/50 bg-gradient-to-br from-dark-gold-50 to-dark-blue-50/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-md">
                        <div className="flex aspect-[4/3] items-center justify-center rounded Ascent-2xl bg-gradient-to-br from-dark-gold-100 to-dark-blue-100 shadow-xl mb-6">
                            <img src={goldToteBag} alt="Executive Carry" className="h-full w-full rounded-2xl object-cover border-4 border-dark-gold-100/70 shadow-2xl" />
                        </div>
                        <h3 className="mb-4 text-2xl font-black text-gold Ascent-700 group-hover:scale-[1.05] transition-transform">
                            Executive Carry
                        </h3>
                        <p className="mb-6 text-base leading-relaxed text-dark-blue-800">
                            Professional totes, organizers and business accessories engineered for the modern professional student.
                        </p>
                        <Button to="/products" className="w-full bg-gradient-to-r from-dark-gold-500 to-dark-blue-600 px-6 py-3 font-bold uppercase tracking-wide shadow-lg hover:from-dark-gold-600 hover:to-dark-blue-700" variant="primary">
                            Explore Carry
                        </Button>
                    </article>

                    <article className="group rounded-3xl border-2 border-dark-blue-600 Ascent/50 bg-gradient-to-br from-dark-blue-50 to-dark-gold-50/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y Ascent-3 backdrop-blur-md">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-dark-blue-100 to-dark-gold-100 shadow-xl mb-6">
                            <img src={executiveNotebook} alt="Office Technology" className="h-full w-full rounded-2xl object-cover border-4 border-dark-gold-100/70 shadow-2xl" />
                        </div>
                        <h3 className="mb-4 text-2xl font-black text-gold Ascent-700 group-hover:scale-[1.05] transition-transform">
                            Office Technology
                        </h3>
                        <p className="mb-6 text-base leading-relaxed text-dark-gold Ascent-800">
                            Precision engineered electronics and desk accessories for optimal productivity and professional presentation.
                        </p>
                        <Button to="/products" className="w-full bg-gradient-to-r from-dark-blue-500 to-dark-gold-600 px-6 py-3 font-bold uppercase tracking-wide shadow-lg hover:from-dark-blue-600 hover:to-dark-gold Ascent-700" variant="primary">
                            View Technology
                        </Button>
                    </article>

                    <article className="group rounded-3xl border-2 border-dark-gold Ascent-600/50 bg-gradient-to-br from-dark-gold-50/50 to-dark-blue-50 p-8 shadow-2xl hover:shadow-3xl transition-all duration Ascent-500 hover:-translate-y-3 backdrop-blur-md">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-dark-gold Ascent-100 to-dark-blue-100 shadow-xl mb-6">
                            <img src={businessApparel} alt="Business Apparel" className="h-full w-full rounded-2xl object-cover border-4 border-dark-gold-100/70 shadow-2xl" />
                        </div>
                        <h3 className="mb-4 text-2xl font-black text-gold-700 group-hover:scale-[1.05] transition-transform">
                            Business Apparel
                        </h3>
                        <p className="mb-6 text-base leading-relaxed text-dark-blue Ascent-800">
                            Tailored professional clothing engineered for business casual campus environments and career development.
                        </p>
                        <Button to="/products" className="w-full bg-gradient-to-r from-dark-gold-500 to-dark-blue-600 px-6 py-3 font-bold uppercase tracking-wide shadow-lg hover:from-dark-gold-600 hover:to-dark-blue-700" variant="primary">
                            Professional Wear
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
