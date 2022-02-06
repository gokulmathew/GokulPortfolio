import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-4">
      <nav>
        <div className="container mx-auto">
          <div className="relative flex items-center justify-content-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden"></div>
            <div className="flex-1 flex items-center justify-content-between">
              <div className="flex-shrink-0 flex items-center">
                <Link
                  to="/"
                  className="text-2xl anchor font-weight-bold font-italic hover:text-gray-700"
                >
                  Gokul
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex gap-2">
                  <Link
                    to="/"
                    className="px-3 py-2 anchor rounded-md font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="px-3 py-2 anchor rounded-md font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    className="px-3 py-2 anchor rounded-md font-medium"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/blog"
                    className="px-3 py-2 anchor rounded-md font-medium"
                  >
                    Blog
                  </Link>
                  {/* <Link
                    to="/uses"
                    className="px-3 py-2 anchor rounded-md font-medium"
                  >
                    Uses
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
