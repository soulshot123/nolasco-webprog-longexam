import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 flex flex-col items-center justify-center p-8 text-center">
      <img 
        src="/src/assets/img/nubdexchange_logo.png" 
        alt="NubdEx Logo"
        className="w-96 h-96 sm:w-[400px] sm:h-[400px] mx-auto mb-12 object-contain drop-shadow-2xl rounded-full border-8 border-amber-400/70"
      />
      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-12 max-w-2xl mx-auto border-4 border-amber-400/50 shadow-2xl">
        <div className="text-blue-100">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            Error
          </p>
          <h1 className="text-8xl font-black leading-tight bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl mb-6 sm:text-9xl">
            404
          </h1>
          <p className="mt-6 text-xl leading-8 text-blue-100 mb-10 max-w-md mx-auto">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
