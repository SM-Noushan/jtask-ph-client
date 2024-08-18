import { Link, useNavigate } from "react-router-dom";
import GenericButton from "../Buttons/GenericButton";
import CommonInput from "../Form/CommonInput";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../../Assets/logo-transparent-bg.png";

const SignUp = () => {
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;
    if (password !== passwordConfirm) {
      setLoading(false);
      return toast.error("Password Does Not Match");
    }
    try {
      // register user
      await createUser(email, password);
      // save username
      await updateUserProfile(username);
      form.reset();
      toast.success("Register successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white p-8 w-full">
      <div>
        <Link to="/">
          <span className="sr-only">Website Logo</span>
          <img src={logo} alt="website-logo" className="h-20" />
        </Link>
        <h2 className="text-xl font-semibold my-2">
          {/* Log In To Your Account */}
          Create Your Account
        </h2>
        <span className="inline-block text-justify text-sm">
          Welcome Back! By click the sign up button, you&apos;re agree to
          SuperShop Terms and Service and acknowledge the &nbsp;
          <span className="text-blue-5F3 underline">Privacy and Policy</span>
        </span>
      </div>
      <form
        onSubmit={handleForm}
        className="space-y-4 mt-4 bg-white rounded-t-[40px] lg:rounded-t-none px-4 lg:px-0"
      >
        <CommonInput
          label="Name"
          placeholder="@username"
          type="text"
          nameId="username"
        />
        <CommonInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          nameId="email"
        />
        <CommonInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          nameId="password"
        />
        <CommonInput
          label="Confirm Password"
          placeholder="Re-type password"
          type="password"
          nameId="passwordConfirm"
        />
        <div>
          <GenericButton
            type="submit"
            loading={loading}
            className="bg-indigo-500 w-full font-semibold"
          >
            {loading ? (
              <span className="animate-spin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                  />
                </svg>
              </span>
            ) : (
              "Sign Up"
            )}
          </GenericButton>
          <p className="text-sm text-dark-D3A text-center mt-4 pb-4 lg:pb-0">
            Already Have an Account?&nbsp;
            <Link
              to="/account/login"
              className="underline text-blue-BCA font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
