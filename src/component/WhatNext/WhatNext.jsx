const WhatNext = () => {
  return (
    <div className="text-center mt-12 px-4 lg:px-0">
      <p className="py-2 text-designColor font-semibold">04. What’s Next?</p>
      <h1 className="lg:text-5xl text-3xl font-bold text-lightColor mt-2">
        Get In Touch
      </h1>
      <p className="text-xl text-lightColor  border-purple-800 py-7 mx-auto max-w-2xl">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="mt-2">
        <a
          href="mailto:yeasinmiah1272001@gmail.com"
          className="text-designColor border border-designColor px-6 py-2 rounded-md duration-300 hover:bg-slate-700 hover:text-white"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default WhatNext;
