const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="font-bold text-5xl tracking-tight text-[#3c5164]">
          Order Your Favorite Cake Now!
        </h1>
        <span className="text-xl">
          Choose from a variety of cakes and get them delivered fresh to your doorstep!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src="/landing.png" alt="Cake display" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold tracking-tighter">
            Experience Seamless Cake Ordering
          </span>
          <span>
            Elevate your celebrations with our delicious cakes. Download our app for quicker and more convenient cake orders.
          </span>
          <img src="/appDownload.png" alt="App download buttons" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
