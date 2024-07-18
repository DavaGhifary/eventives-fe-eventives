import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-full max-w-sm rounded-lg drop-shadow-lg">
        <div className="bg-[#fd7e14] w-[7rem] rounded-full mx-auto mt-3">
          <div className="flex justify-center p-1">
            <img src="/logo_cyrcle.png" width={100} />
          </div>
        </div>
        <form className="w-full p-10">
          <div className="relative mb-[2rem]">
            <input
              type="email"
              id="email"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-300 focus:ring-[#fd7e14] focus:outline-none"
              placeholder="name@flowbite.com"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-[-1.3rem] peer-focus:text-[#fd7e14] peer-focus:text-sm peer-valid:top-[-1.3rem] peer-valid:text-[#fd7e14] peer-valid:text-sm"
            >
              Your email
            </label>
          </div>
          <div className="relative mb-3">
            <input
              type="password"
              id="password"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-300 focus:ring-[#fd7e14] focus:outline-none"
              placeholder="name@flowbite.com"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-[-1.3rem] peer-focus:text-[#fd7e14] peer-focus:text-sm peer-valid:top-[-1.3rem] peer-valid:text-[#fd7e14] peer-valid:text-sm"
            >
              Your Password
            </label>
          </div>
          <div className="mb-0">
            <button
              type="submit"
              className="bg-[#fd7e14] text-white hover:text-[#fd7e14] focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full px-5 py-2 mb-3 text-center transition-all"
            >
              Login
            </button>
          </div>
        </form>
        <div className="w-full p-10 pt-0">
          <button className="bg-blue-700 text-white text-sm w-full rounded-md p-2 mb-3 hover:bg-blue-600 transition-all">
            <FontAwesomeIcon icon={faGoogle} width={34} className="font-bold" />
            Sign in With Google
          </button>
          <div className="text-sm mt-2">
            <p>
              Don't have an account?{" "}
              <Link
                href="/auth-event/register"
                className="text-blue-500 hover:text-blue-700 transition-all"
              >
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
