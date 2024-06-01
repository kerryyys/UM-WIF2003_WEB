import "bootstrap/dist/css/bootstrap.min.css";
import NewsFeed from "../../components/community/NewsFeed/NewsFeed";
import ProfileCard from "../../components/community/ProfileCard/ProfileCard";
import ExploreList from "../../components/community/NewsFeed/ExploreList/ExploreList";
import { exploreListData, newsFeedList } from "../../components/community/data";

function CommunityPage() {
  return (
    <div className="tw-px-12">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center mt-5 md:tw-flex-row md:tw-justify-center md:tw-items-start">
        <div className="tw-hidden xl:tw-flex xl:tw-flex-col xl:tw-justify-center xl:tw-items-center xl:tw-w-[50%] xl:tw-gap-y-5 ">
          <ProfileCard
            name="Mehrab Bozorgi"
            title="Bachelor of Software Engineering"
          />
          <ExploreList exploreListData={exploreListData} />
        </div>
        <div className="tw-pl-5 tw-pr-10">
          <NewsFeed newsFeedList={newsFeedList} />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
