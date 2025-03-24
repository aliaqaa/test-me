import React from "react";
import AuthFooterItems from "../../../Mock/AuthFooter";
import { Link } from "react-router";

function AuthFooter() {
  return (
    <div className="container flex p-5 items-center my-10 justify-start gap-2 ">
      <Link
        to="mailto:ali.tousi77@gmail.com"
        className="bg-[#008D8A] text-white px-4 py-2 rounded-full hover:scale-105 transition-transform items-center"
      >
        Ali.tousi77@gmail.com
      </Link>
      <div className="flex gap-2">
        {AuthFooterItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="hover:scale-105 transition-transform"
          >
            <img src={item.img} alt={item.title} className="w-10 h-10" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default AuthFooter;
