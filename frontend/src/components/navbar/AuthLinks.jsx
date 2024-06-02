import { Link } from "react-router-dom";

function AuthLinks({ profilePic, handleSignOut }) {
  return (
    <div className="tw-flex tw-items-center tw-gap-3">
      <Link to="/Register">
        <span className="hover:tw-text-orange-300 tw-transition">Sign Up</span>
      </Link>
      <vr className="tw-bg-slate-100"></vr>
      <Link to="/Login">
        <span className="hover:tw-text-orange-300 tw-transition">Sign In</span>
      </Link>
    </div>
  );
}

export default AuthLinks;
