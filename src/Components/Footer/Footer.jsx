import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Footer = () => {
  const {name} =useContext(AuthContext)
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            TripNest bd by {name}
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
