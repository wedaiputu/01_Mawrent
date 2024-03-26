import React from "react";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <Link
          to="https://www.instagram.com/your_instagram_account"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-md bg-white-200 mr-4"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
            alt="Instagram"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <Link
          to="https://www.facebook.com/your_facebook_account"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-md bg-white-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
      </div>
    </div>
  );
}
