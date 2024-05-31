import { useState } from "react";
import Button from "react-bootstrap/Button";

function FollowButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Button onClick={handleClick} className="tw-border tw-border-red-300">
      {isActive ? "Followed" : "Follow"}
    </Button>
  );
}

export default FollowButton;
