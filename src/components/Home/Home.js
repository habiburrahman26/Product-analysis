import { useNavigate } from 'react-router-dom';
import camera from '../../assest/images/camera.jpg';
import useReviews from '../hooks/useReviews';
import Review from '../Reviews/Review';

const Home = () => {
  const { reviews } = useReviews();
  const navigate = useNavigate();

  return (
    <>
      <div className="grid md:grid-cols-2 text-center md:text-left gap-10 px-8 py-10 md:px-20 md:py-24 place-items-center">
        <div>
          <h1 className="text-2xl md:text-4xl uppercase font-semibold text-blue-400">
            Canon, EOS R6
          </h1>
          <p className="mt-5 text-gray-700 md:text-lg">
            This is one of the most beautiful and productive cameras in the
            world. This camera is for professional photographers. You can
            consider yourself lucky if you have such a camera.
          </p>
          <button className="border-none px-10 py-3 mt-10 bg-blue-100 font-semibold text-blue-900 hover:bg-blue-200 rounded-full transition-all">
            Buy Now
          </button>
        </div>
        <div className="">
          <img src={camera} alt="camera" />
        </div>
      </div>

      {/* Customer Review */}
      <div className="px-20 pt-20">
        <h2 className="text-3xl text-center">Customer Reviews(3)</h2>
        {reviews.slice(0, 3).map((review) => (
          <Review
            key={review.id}
            name={review.name}
            img={review.img}
            rating={review.rating}
            body={review.body}
          />
        ))}
        <div className="text-center pt-6 mb-6">
          <button
            className="border-none bg-blue-600 px-10 py-1 rounded-full text-white hover:bg-blue-500 transition-all"
            onClick={() => navigate('/reviews')}
          >
            See All Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
