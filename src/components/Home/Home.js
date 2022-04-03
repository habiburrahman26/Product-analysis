import camera from '../../assest/images/camera.jpg';

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 text-center md:text-left gap-10 px-8 py-10 md:px-20 md:py-24 place-items-center">
      <div>
        <h1 className="text-2xl md:text-4xl uppercase font-semibold text-blue-400">
          Canon, EOS R6
        </h1>
        <p className="mt-5 text-gray-700 md:text-lg">
          This is one of the most beautiful and productive cameras in the world.
          This camera is for professional photographers. You can consider
          yourself lucky if you have such a camera.
        </p>
        <button className="border-none px-10 py-3 mt-10 bg-blue-100 font-semibold text-blue-900 hover:bg-blue-200 rounded-full transition-all">
          Buy Now
        </button>
      </div>
      <div className="">
        <img src={camera} alt="camera" />
      </div>
    </div>
  );
};

export default Home;
