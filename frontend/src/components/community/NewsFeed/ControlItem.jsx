import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";

function ControlItem({ icon, label, onClick, isActive }) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      className="tw-flex-grow tw-flex tw-justify-center tw-items-center"
      onClick={onClick}
    >
      <Button
        variant="light"
        className="tw-flex-grow tw-flex tw-justify-center tw-items-center tw-p-3 tw-pl-0 tw-text-md"
      >
        {React.cloneElement(icon, {
          className: `${icon.props.className} ${
            isActive
              ? "tw-bg-gradient-to-t tw-from-pink-500 tw-to-pink-300 tw-bg-clip-text"
              : ""
          }`,
        })}
        <span
          className={`tw-m-0 tw-text-md ${
            isActive
              ? "tw-font-bold tw-bg-gradient-to-t tw-from-pink-500 tw-to-pink-300 tw-text-transparent tw-bg-clip-text"
              : ""
          }`}
        >
          {label}
        </span>
      </Button>
    </motion.div>
  );
}

export default ControlItem;
