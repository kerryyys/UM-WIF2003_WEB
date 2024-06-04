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
import { likePost, unlikePost } from "../../../api/postApi"; // Adjust the import according to your project structure
import { useUserContext } from "../../../context/UserContext";
import { usePostContext } from "../../../context/PostContext";
import { fetchPostStats } from "../../../api/postApi";
import { useEffect } from "react";

function Controls({ setNumberOfLikes, setNumberOfComments }) {
  const { user } = useUserContext();
  const [activeItem, setActiveItem] = useState(null);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { postId, post } = usePostContext();

  useEffect(() => {
    if (post && user && post.likes.includes(user._id)) {
      setIsLikeActive(true);
    }
  }, [post, user]);

  const fetchAndUpdateStats = async () => {
    try {
      const stats = await fetchPostStats(postId);
      setNumberOfLikes(stats.numberOfLikes);
      setNumberOfComments(stats.numberOfComments);
    } catch (error) {
      console.error("Error fetching post stats:", error);
    }
  };

  const handleLike = async () => {
    setIsLikeActive(!isLikeActive);
    if (!isLikeActive) {
      try {
        await likePost(postId, user._id);
        fetchAndUpdateStats();
      } catch (error) {
        console.error("Error liking post:", error);
      }
    } else {
      try {
        await unlikePost(postId, user._id);
        fetchAndUpdateStats();
      } catch (error) {
        console.error("Error un-liking post:", error);
      }
    }
  };

  const items = [
    {
      icon: <FontAwesomeIcon icon={faThumbsUp} className="tw-mr-4" />,
      label: "Like",
      color: "#ff7eb3", // Pink color
      isActive: isLikeActive,
      onClick: handleLike,
      whileTapAnimation: null,
      inActiveClassName: "tw-text-red-500",
    },
    {
      icon: <FontAwesomeIcon icon={faCommentDots} className="tw-mr-4" />,
      label: "Comment",
      color: "#6fa3ef", // Blue color
      isActive: activeItem === "Comment",
      onClick: () => setActiveItem(activeItem === "Comment" ? null : "Comment"),
      whileTapAnimation: null,
      inActiveClassName: "tw-text-red-500",
    },
    {
      icon: <FontAwesomeIcon icon={faShare} className="tw-mr-4" />,
      label: "Share",
      color: "#76ef66", // Green color
      isActive: false,
      onClick: () => setIsModalOpen(true),
      whileTapAnimation: null,
      inActiveClassName: "tw-text-red-500",
    },
    {
      icon: <FontAwesomeIcon icon={faPaperPlane} className="tw-mr-4" />,
      label: "Send",
      color: "#f7d469", // Yellow color
      isActive: false,
      onClick: () => {}, // No action defined for Send
      whileTapAnimation: null,
      inActiveClassName: "tw-text-red-500",
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
            isActive={item.isActive}
            onClickFunction={item.onClick}
            whileTapAnimation={null}
            inActiveClassName={item.inActiveClassName}
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
