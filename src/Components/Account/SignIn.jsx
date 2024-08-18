import { Link, useNavigate } from "react-router-dom";
import GenericButton from "../Buttons/GenericButton";
import CommonInput from "../Form/CommonInput";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../../Assets/logo-transparent-bg.png";

const socialLogin = (google, loading, handleSocialLogin) => (
  <>
    <GenericButton
      onClick={() => handleSocialLogin(google)}
      loading={loading}
      className="bg-[linear-gradient(91deg,rgba(228,228,228,1),rgba(255,255,255,1))] w-full my-6 rounded-md shadow-md !text-gray-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
      >
        <path
          d="M2.01294 7.22495C2.70709 5.77844 3.68785 4.55585 4.92388 3.53926C6.59879 2.15544 8.52001 1.32247 10.6741 1.0672C13.2044 0.767148 15.5824 1.24633 17.7813 2.56297C18.3276 2.88989 18.8382 3.2616 19.3263 3.66465C19.4472 3.76318 19.4338 3.82139 19.3308 3.91992C18.3321 4.91412 17.3334 5.90831 16.3437 6.91147C16.2273 7.02791 16.1646 7.01895 16.0392 6.9249C13.1372 4.6902 8.90515 5.29478 6.7421 8.2505C6.36143 8.76999 6.05243 9.32979 5.83747 9.93884C5.81955 9.99259 5.78372 10.0418 5.75685 10.0956C5.17915 9.65671 4.59696 9.21783 4.02373 8.77447C3.35197 8.25946 2.68022 7.74444 2.01294 7.22495Z"
          fill="#E94335"
        />
        <path
          d="M5.75694 14.2963C5.94951 14.7217 6.11073 15.1651 6.35256 15.5636C7.36915 17.2296 8.82014 18.2999 10.7324 18.6806C12.4566 19.0254 14.1136 18.7925 15.6586 17.9282C15.7123 17.9014 15.7661 17.8745 15.8154 17.8476C15.8422 17.8745 15.8646 17.9058 15.8915 17.9282C17.0469 18.8239 18.2068 19.7196 19.3622 20.6152C18.8069 21.1661 18.1754 21.6094 17.5037 21.9946C15.5556 23.1052 13.4463 23.5531 11.225 23.3829C8.45739 23.1679 6.07042 22.0752 4.09994 20.1047C3.23562 19.2404 2.52356 18.2641 2.00854 17.149C2.48773 16.7818 2.96692 16.419 3.4461 16.0518C4.21638 15.4651 4.98666 14.8829 5.75694 14.2963Z"
          fill="#34A853"
        />
        <path
          d="M19.3669 20.6153C18.2115 19.7196 17.0516 18.8239 15.8962 17.9283C15.8693 17.9059 15.8425 17.8745 15.8201 17.8477C16.2186 17.5386 16.6262 17.2386 16.9531 16.8445C17.4994 16.1907 17.8622 15.4517 18.0503 14.6232C18.0727 14.5202 18.0548 14.4844 17.9518 14.4889C17.898 14.4934 17.8488 14.4889 17.795 14.4889C15.9678 14.4889 14.1362 14.4844 12.309 14.4934C12.1075 14.4934 12.0627 14.4396 12.0672 14.247C12.0761 12.9483 12.0761 11.6496 12.0672 10.3509C12.0672 10.1852 12.112 10.1404 12.2777 10.1404C15.6275 10.1449 18.9773 10.1449 22.3316 10.1404C22.4749 10.1404 22.5331 10.1762 22.569 10.3285C22.8421 11.56 22.8242 12.7961 22.6585 14.041C22.5242 15.0352 22.2823 15.9981 21.9106 16.9296C21.3598 18.3044 20.5492 19.5046 19.4834 20.5347C19.4431 20.566 19.4028 20.5884 19.3669 20.6153Z"
          fill="#4285F3"
        />
        <path
          d="M5.75737 14.2962C4.98709 14.8829 4.21681 15.4651 3.44653 16.0518C2.96734 16.4145 2.48816 16.7817 2.00897 17.149C1.63727 16.4593 1.39544 15.7293 1.19839 14.9769C0.822205 13.5215 0.763987 12.0436 0.969991 10.5613C1.13121 9.3969 1.46709 8.27731 2.00897 7.22937C2.68073 7.74438 3.348 8.26387 4.01976 8.77889C4.59747 9.22224 5.17518 9.66112 5.75289 10.1C5.65436 10.5792 5.51553 11.0494 5.47075 11.542C5.39014 12.4377 5.47523 13.311 5.7305 14.1708C5.74841 14.2067 5.75289 14.2514 5.75737 14.2962Z"
          fill="#FABB06"
        />
      </svg>
      Google
    </GenericButton>
    {/* DIVIDER */}
    <div className="flex items-center">
      <hr className="flex-1" />
      <span className="text-dark-35A text-sm">Or Continue with Email</span>
      <hr className="flex-1" />
    </div>
  </>
);

const SignIn = () => {
  const { loading, setLoading, signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate();

  //   Google Login
  const handleSocialLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login successful");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };
  // Login
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      // login user
      await signIn(email, password);
      form.reset();
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <Link to="/">
          <span className="sr-only">Website Logo</span>
          <img src={logo} alt="website-logo" className="h-20" />
        </Link>
        <h2 className="text-xl font-semibold my-4">Log In To Your Account</h2>
        <span>Welcome Back! Select a method to log in:</span>
        {/* SOCIAL LOGIN BUTTON */}
        <div>{socialLogin(signInWithGoogle, loading, handleSocialLogin)}</div>
      </div>
      <form
        onSubmit={handleForm}
        className="space-y-8 mt-10 bg-white rounded-3xl p-6"
      >
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
              "Login"
            )}
          </GenericButton>
          <p className="text-sm text-dark-D3A text-center mt-4 pb-4 lg:pb-0">
            Don&apos;t Have an Account? &nbsp;
            <Link
              to="/account/register"
              className="underline text-blue-BCA font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignIn;
