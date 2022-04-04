import React from 'react';

const Blogs = () => {
  return (
    <div className="px-2 py-8 md:px-40 md:py-14">
      <div className="border-2 border-blue-100 px-8 rounded py-3 text-gray-700 mb-6">
        <h1 className="text-2xl mb-2 font-medium">What is context API?</h1>
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
      <div className="border-2 border-blue-100 px-8 rounded py-3 text-gray-700  overflow-auto">
        <h1 className="text-2xl mb-2 font-medium">What is semantic tag?</h1>
        <p>
          Semantic tags are HTML elements those clearly describe their meaning
          in a human and machine-readable way. Some of semantic tags are:
          <span className="bg-blue-50 mx-1">articel</span>,
          <span className="bg-blue-50 mx-1">aside</span>,
          <span className="bg-blue-50 mx-1">details</span>,
          <span className="bg-blue-50 mx-1">nav</span>,
          <span className="bg-blue-50 mx-1">header</span>,
          <span className="bg-blue-50 mx-1">articel</span>,
          <span className="bg-blue-50 mx-1">section</span>,
          <span className="bg-blue-50 mx-1">figure</span>,
          <span className="bg-blue-50 mx-1">figcaption</span>,
          <span className="bg-blue-50 mx-1">footer</span> etc. Some of the
          benefits from writing semantic markup are we can easliy understend
          what is the menaing in this tag, SEO can be done properly, Screen
          readers can use it as a signpost to help visually impaired users
          navigate a page and also it is much easier to read.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
