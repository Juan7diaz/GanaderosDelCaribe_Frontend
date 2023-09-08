import { Link } from "react-router-dom";
import DrawerImage from "../components/drawerImage/DrawerImage";

// eslint-disable-next-line react/prop-types
function LoginLayout({ children }) {
  return (
    <div className="bg-white ">
      <div className="flex justify-center h-screen">
        <DrawerImage />
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <Link to="/">
                <div className="flex justify-center mx-auto fill-primary h-8">
                  <svg viewBox="0 0 20 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9H20L10 0L0 9H3L10 2.69L17 9ZM5 1.81V0H2V4.5L5 1.81Z" />
                  </svg>
                </div>
              </Link>
              <p className="mt-3 text-gray-500 ">
                Inicia sesión para acceder a tu cuenta
              </p>
            </div>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;