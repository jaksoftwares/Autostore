import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialAuth = () => {
  return (
    <div className="flex flex-col gap-3">
      <button className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg">
        <FaGoogle className="mr-2" /> Continue with Google
      </button>
      <button className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-lg">
        <FaFacebook className="mr-2" /> Continue with Facebook
      </button>
    </div>
  );
};

export default SocialAuth;
