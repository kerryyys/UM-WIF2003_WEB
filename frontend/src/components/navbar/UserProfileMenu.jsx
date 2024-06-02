import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import default_avatar from "../../assets/icons/profile/avatar-default-symbolic-svgrepo-com.svg";
import { useUserContext } from "../../context/UserContext";


function UserProfileMenu({ profilePic, handleSignOut }) {
  const { user } = useUserContext();

  return (
    <div className="tw-flex tw-items-center tw-gap-3">
     <Link to={`/Profile/${user._id}`}>
                <img
                  src={
                    user.profilePic
                      ? `data:${user.profilePicContentType};base64,${user.profilePic}`
                      : default_avatar
                  }
                  alt="Profile"
                  className="tw-cursor-pointer tw-w-[50px] tw-h-[50px] tw-rounded-full"
                />
              </Link>
      <Button onClick={handleSignOut} className="navbar-sign-out-btn">
        Sign out <i className="bi bi-box-arrow-right" />
      </Button>
    </div>
  );
}

export default UserProfileMenu;
