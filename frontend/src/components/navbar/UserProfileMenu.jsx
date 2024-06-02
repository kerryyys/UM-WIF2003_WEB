import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function UserProfileMenu({ profilePic, handleSignOut }) {
  return (
    <div className="tw-flex tw-items-center tw-gap-3">
      <Link to="/Profile">
        <img
          src={profilePic}
          alt="Profile"
          className="tw-cursor-pointer tw-w-[50px]"
        />
      </Link>
      <Button onClick={handleSignOut} className="navbar-sign-out-btn">
        Sign out <i className="bi bi-box-arrow-right" />
      </Button>
    </div>
  );
}

export default UserProfileMenu;
