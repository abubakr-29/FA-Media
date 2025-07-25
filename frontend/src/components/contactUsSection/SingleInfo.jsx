const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-2 items-center text-stone-300">
      <Image className="text-xl md:text-2xl text-purple-500" />
      <p className="leading-relaxed tracking-wide text-sm sm:text-md">{text}</p>
    </div>
  );
};

export default SingleInfo;
