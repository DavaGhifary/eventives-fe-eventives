import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white max-w-sm w-[25rem] rounded-lg drop-shadow-lg">
        <div className="bg-[#fd7e14] w-[7rem] rounded-full  mx-auto mt-3">
          <div className="flex justify-center p-1">
            <img src="/logo_cyrcle.png" width={100} />
          </div>
        </div>
        <form className="w-full p-10">
          <div className="relative mb-[2rem]">
            <input
              type="text"
              id="email"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-300 focus:ring-[#fd7e14] focus:outline-none"
              placeholder="name@flowbite.com"
              required
            />
            <label
              for="email"
              className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-[-1.3rem] peer-focus:text-[#fd7e14] peer-focus:text-sm peer-valid:top-[-1.3rem] peer-valid:text-[#fd7e14] peer-valid:text-sm"
            >
              Username
            </label>
          </div>
          <div className="relative mb-[2rem]">
            <input
              type="email"
              id="email"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-300 focus:ring-[#fd7e14] focus:outline-none"
              placeholder="name@flowbite.com"
              required
            />
            <label
              for="email"
              className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-[-1.3rem] peer-focus:text-[#fd7e14] peer-focus:text-sm peer-valid:top-[-1.3rem] peer-valid:text-[#fd7e14] peer-valid:text-sm"
            >
              Your Email
            </label>
          </div>
          <div className="relative mb-5">
            <input
              type="password"
              id="email"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-300 focus:ring-[#fd7e14] focus:outline-none"
              placeholder="name@flowbite.com"
              required
            />
            <label
              for="email"
              className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-[-1.3rem] peer-focus:text-[#fd7e14] peer-focus:text-sm peer-valid:top-[-1.3rem] peer-valid:text-[#fd7e14] peer-valid:text-sm"
            >
              Your Password
            </label>
          </div>
          <div className="mb-">
            <button
              type="submit"
              className="text-white bg-[#fd7e14] hover:bg-[#ff7300] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 mb-3 text-center"
            >
              Registration
            </button>
            <div className="text-sm">
              <p>
                have an account? <Link href="/auth-event/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
