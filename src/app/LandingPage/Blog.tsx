const BlogPost = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg m-12">
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt="Card image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>
      <div className="flex justify-center my-4">
        <button className="bg-black text-white py-2 px-4 rounded border border-transparent hover:bg-white hover:text-black hover:border-black">
          See More
        </button>
      </div>
    </div>
  );
};

export default BlogPost;