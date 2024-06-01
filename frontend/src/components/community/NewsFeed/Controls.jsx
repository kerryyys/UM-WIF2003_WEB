import React, { useState } from "react";
import ControlItem from "./ControlItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentDots,
  faShare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import CommentSection from "./CommentSection";
import ShareModal from "./ShareModal";
import { AnimatePresence, motion } from "framer-motion";

function Controls() {
  const [activeItem, setActiveItem] = useState(null);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      icon: <FontAwesomeIcon icon={faThumbsUp} className="tw-mr-4" />,
      label: "Like",
      color: "#ff7eb3", // Pink color
      isActive: isLikeActive,
      onClick: () => setIsLikeActive(!isLikeActive),
    },
    {
      icon: <FontAwesomeIcon icon={faCommentDots} className="tw-mr-4" />,
      label: "Comment",
      color: "#6fa3ef", // Blue color
      isActive: activeItem === "Comment",
      onClick: () => setActiveItem(activeItem === "Comment" ? null : "Comment"),
    },
    {
      icon: <FontAwesomeIcon icon={faShare} className="tw-mr-4" />,
      label: "Share",
      color: "#76ef66", // Green color
      isActive: false,
      onClick: () => setIsModalOpen(true),
    },
    {
      icon: <FontAwesomeIcon icon={faPaperPlane} className="tw-mr-4" />,
      label: "Send",
      color: "#f7d469", // Yellow color
      isActive: false,
      onClick: () => {}, // No action defined for Send
    },
  ];

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-3 tw-mt-5">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-3">
        {items.map((item, idx) => (
          <ControlItem
            key={idx}
            icon={item.icon}
            label={item.label}
            color={item.color}
            onClick={item.onClick}
            isActive={item.isActive}
          />
        ))}
      </div>
      <AnimatePresence>
        {activeItem === "Comment" && (
          <motion.div
            className="tw-w-full tw-mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <CommentSection />
          </motion.div>
        )}
      </AnimatePresence>
      <ShareModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        link="https://youtu.be/xwBJbWc2xKE?si=P3sZsDlQoaeS7TKY"
      />
    </div>
  );
}

export default Controls;
