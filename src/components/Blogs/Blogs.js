import React from 'react';

const Blogs = () => {
  return (
    <div className="p-8 md:px-40 md:py-14">
      <div className="border-2 px-8 rounded py-3 text-gray-700">
        <h1 className="text-2xl mb-2 font-medium">What is context api?</h1>
        <p>
          With the help of React context, we can pass and use data on whatever
          component we need in our React app. Context API is helpful when we
          pass data that can be used in any component of our application. When
          we need to pass data to nested components sometimes we pass data
          unnecessary to some components those components don't need that data.
          Context API helps us avoid this type of issue( props drilling). This
          is the benefit of context API – we can pass data anywhere in our react
          app to avoid the props drilling.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
