const Cardmini = () => {
  return (
    <>
      <div className="max-w-6xl mb-3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="py-4 px-6 shadow-sm bg-white rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-red-400">2597+</h1>
          <span className="text-lg font-medium">Requests</span>
        </div>
        <div className="py-4 px-6 shadow-sm bg-white rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-red-400">3587+</h1>
          <span className="text-lg font-medium">Donated</span>
        </div>
        <div className="py-4 px-6 shadow-sm bg-white rounded-lg flex flex-col gap-3 justify-center items-center">
          <h1 className="text-5xl font-bold text-red-400">313+</h1>
          <span className="text-lg font-medium">Donor</span>
        </div>
      </div>
    </>
  );
};

export default Cardmini;
