const PickupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-4xl w-full border-4 border-amber-400/50 text-center text-blue-100">
        <h1 className="text-6xl font-black bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
          Pickup Locations
        </h1>
        <p className="text-2xl mb-8">Campus pickup points coming soon.</p>
        <a href="/" className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-2xl hover:from-amber-600 hover:to-yellow-600 transition-all">
          Back Home
        </a>
      </div>
    </div>
  );
};

export default PickupPage;
