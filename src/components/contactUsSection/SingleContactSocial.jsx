const SingleContactSocial = ({ Icon, link, label }) => {
  return (
    <div className="flex items-center justify-center">
      <a
        href={link}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-md h-9 w-9 sm:text-lg sm:h-10 sm:w-10 border border-white text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
