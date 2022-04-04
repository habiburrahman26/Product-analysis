import StarIcon from '../Utilites/StartIcon';

const Review = ({ name, img, rating, body }) => {
  return (
    <div className="flex gap-6 items-start shadow hover:shadow-lg transition-all py-3 px-5 mt-8 w-[400px] md:w-[520px] mx-auto text-gray-700 rounded mb-8">
      <div className="">
        <img src={img} alt="user" className="rounded-full w-12 h-12" />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <div className="flex mt-1" title={`Rating ${rating} out of 5`} >
          <StarIcon className={`${rating >= 1 ? 'fill-yellow-400' : ''}`} />
          <StarIcon className={`${rating >= 2 ? 'fill-yellow-400' : ''}`} />
          <StarIcon className={`${rating >= 3 ? 'fill-yellow-400' : ''}`} />
          <StarIcon className={`${rating >= 4 ? 'fill-yellow-400' : ''}`} />
          <StarIcon className={`${rating === '5' ? 'fill-yellow-400' : ''}`} />
        </div>
        <p className="mt-1">{body}</p>
      </div>
    </div>
  );
};

export default Review;
