const Review = ({ name, img, rating, body }) => {
  return (
    <div className="shadow py-3 px-5 mb-4 mt-10 w-[400px] md:w-[520px] mx-auto text-gray-700 rounded">
      <div className="flex items-center gap-4">
        <img src={img} alt="user" className="rounded-full w-12 h-12" />
        <p>{name}</p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">
          Rating: <span className="text-yellow-400 font-bold">{rating}</span> out of 5
        </p>
        <p className="font-semibold">Comment: {body}</p>
      </div>
    </div>
  );
};

export default Review;
