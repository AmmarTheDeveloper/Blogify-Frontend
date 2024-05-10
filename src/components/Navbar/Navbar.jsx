import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Logout } from "../logout/logout";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../Services/BASE_URL";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLoggedInState.user);

  const handleDropdown = (e) => {
    if (
      !dropdownRef.current?.contains(e.target) &&
      !e.target.classList.contains("profile-image")
    ) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    if (isDropdownActive) {
      document.addEventListener("click", handleDropdown);
    } else {
      document.removeEventListener("click", handleDropdown);
    }

    return () => {
      if (isDropdownActive) {
        document.removeEventListener("click", handleDropdown);
      }
    };
  }, [isDropdownActive]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blogify
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-[25px]"
              onClick={() => setIsNavActive(!isNavActive)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            {!user ? (
              <div className="flex gap-[5px] mx-[10px]">
                <Link
                  to="/signin"
                  className="text-[black] font-[500] hover:text-[blue]"
                >
                  Sign in
                </Link>
                /
                <Link
                  to="/signup"
                  className="text-[black] font-[500] hover:text-[blue]"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="relative inline-block text-left">
                <div>
                  {/* <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setDropdownActive(!isDropdownActive)}
                  >
                    {{user.name} }
                    <img
                      src={`${BASE_URL}/${user.profileImage}`}
                      className="rounded-full h-[50px] w-[50px]"
                      alt="image not found"
                    />
                  </button> */}
                  <button
                    type="button"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setDropdownActive(!isDropdownActive)}
                  >
                    <img
                      src={`${BASE_URL}/uploads/profile/${user.profileImage}`}
                      className="rounded-full h-[50px] w-[50px] profile-image"
                      alt="image not found"
                    />
                  </button>
                </div>
                <div
                  ref={dropdownRef}
                  className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isDropdownActive ? "" : "hidden"
                  }`}
                >
                  <div className="py-2 text-center bg-[#f9f9f9]">
                    {user.name}
                  </div>
                  <div className="py-1" role="none">
                    <Link
                      to="/accountInfo/profile"
                      className="block text-gray-700 w-[100%] px-4 py-2 text-sm hover:bg-[#f0f0f0]"
                    >
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Account Settings
                    </Link>
                  </div>
                  <div className="py-1" role="none">
                    <button
                      type="button"
                      onClick={() => Logout(dispatch, navigate)}
                      className="text-gray-700 w-[100%] px-4 py-2 text-sm hover:bg-[#f0f0f0]"
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="mr-2"
                      />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`"items-center justify-between" ${
              isNavActive ? "max-h-[500px]" : "max-h-[0]"
            } w-full overflow-hidden md:flex md:max-h-[500px] md:w-auto md:order-1 `}
            id="navbar-sticky"
            style={{ transition: "all 0.3s ease" }}
          >
            <ul className="flex md:items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-[5px] md:gap-[0]">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/blog/u"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      My Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog/add"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Add Blog
                    </Link>
                  </li>
                </>
              ) : null}
              <li>
                <a
                  className="hover:bg-gray-100 md:bg-slate-200 block py-2 px-3 text-gray-900 rounded md:hover:bg-slate-400 transition md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  href="https://github.com/AmmarTheDeveloper"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-gray-100 md:bg-slate-200 block py-2 px-3 text-gray-900 rounded md:hover:bg-slate-400 transition md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  href="https://www.linkedin.com/in/ammar-ansari-390ba1278/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
