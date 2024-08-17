import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <section className="font-poppins max-w-screen-2xl mx-auto py-16 bg-gray-50">
      <div className="w-full mx-auto max-w-lg">
        <Outlet />
      </div>
      {/* <div
        className={`hidden lg:flex-1 rounded-2xl h-full lg:flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-[url('../src/assets/images/8.png')]`}
      >
        <p className="max-w-xs mx-auto px-8 py-7 rounded-lg bg-dark-A16/70 text-white/95 text-xl text-center font-medium">
          <span className="text-blue-BCA font-semibold">
            {register ? (
              <>
                Create Account <br />
              </>
            ) : (
              "Sign in "
            )}
          </span>
          {register
            ? "Fill in Your Information"
            : "to view all the massage therapists"}
        </p>
      </div> */}
    </section>
  );
};

export default Account;
