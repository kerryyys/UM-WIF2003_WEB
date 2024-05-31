import FollowButton from "./FollowButton";

function ExploreItem({ companyImg, companyName }) {
  return (
    <div className="explore-item px-4 d-inline-flex flex-row justify-content-center align-items-center">
      <img
        src={companyImg}
        alt="company"
        className="img-fluid rounded-circle mx-auto d-block tw-w-[65px]"
      ></img>
      <div className="tw-gap-0">
        <p className="tw-text-lg tw-text-center">{companyName}</p>
        <FollowButton />
      </div>
    </div>
  );
}

export default ExploreItem;
