const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100">
      <h1 className="text-6xl font-bold text-orange-700 mb-4">404</h1>
      <p className="text-xl text-orange-800 mb-6">Oops! Page not found 🍂</p>
      <a
        href="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default PageNotFound;
