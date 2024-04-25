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

      <div className="main-content">
        {/* Side Navigation Bar */}
        <div className="side-nav">
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
