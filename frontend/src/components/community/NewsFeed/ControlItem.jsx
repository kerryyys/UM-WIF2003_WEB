import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";

function ControlItem({
  icon,
  label,
  onClickFunction,
  isActive,
  whileTapAnimation,
  inActiveClassName,
}) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      className="tw-flex-grow tw-flex tw-justify-center tw-items-center"
      onClick={onClickFunction}
      whileTapAnimation={whileTapAnimation}
    >
      <Button
        variant="light"
        className="tw-flex-grow tw-flex tw-justify-center tw-items-center tw-p-3 tw-pl-0 tw-text-md"
      >
        {React.cloneElement(icon, {
          className: `${icon.props.className} ${
            isActive ? inActiveClassName : ""
          }`,
        })}
        <span
          className={`tw-m-0 tw-text-md ${isActive ? inActiveClassName : ""}`}
        >
          {label}
        </span>
      </Button>
    </motion.div>
  );
}

export default ControlItem;
