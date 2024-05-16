import "bootstrap/dist/css/bootstrap.min.css";
import "../../pages-css/Community/CommunityPage.css";
import NewsFeed from "../../components/community/NewsFeed/NewsFeed";
import SearchBar from "../../components/community/SearchBar/SearchBar";
import ProfileCard from "../../components/community/ProfileCard/ProfileCard";
import ExploreList from "../../components/community/ExploreList/ExploreList";
import { exploreListData, newsFeedList } from "../../components/community/data";

function CommunityPage() {
  return (
    <>
      {/* SearchBar */}
      <SearchBar />

      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center mt-5 sm:tw-flex-row sm:tw-justify-center sm:tw-items-start ">
        {/* Side Navigation Bar */}
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-2/5 tw-gap-y-5">
          <ProfileCard
            name="Mehrab Bozorgi"
            title="Bachelor of Software Engineering"
          />
          <ExploreList exploreListData={exploreListData} />
        </div>

        <NewsFeed newsFeedList={newsFeedList} />
      </div>
    </>
  );
}

export default CommunityPage;
