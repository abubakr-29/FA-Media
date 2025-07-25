import React from "react";

const SingleContactSocial = ({ Icon, link, label }) => {
  return (
    <div>
      <a
        href={link}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-400 hover:text-white text-xl transition duration-500"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
