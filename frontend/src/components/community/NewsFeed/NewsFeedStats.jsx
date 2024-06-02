import { FaThumbsUp, FaCommentAlt } from "react-icons/fa";

const StatItem = ({ icon, count }) => (
  <div className="tw-flex tw-items-center tw-mr-4">
    <span className="tw-text-xs">{icon}</span>
    <span className="tw-ml-2">{count}</span>
  </div>
);

function NewsFeedStats({ numberOfLikes, numberOfComments }) {
  return (
    <div className="tw-flex tw-justify-start tw-mt-4">
      <StatItem icon={<FaThumbsUp />} count={numberOfLikes} />
      <StatItem icon={<FaCommentAlt />} count={numberOfComments} />
    </div>
  );
}

export default NewsFeedStats;
