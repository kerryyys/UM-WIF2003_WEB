import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/community/ProfileCard/ProfileCard";
import ExploreList from "./components/community/ExploreList/ExploreList";
import { exploreListData, newsFeedList } from "./components/community/data";
import NewsFeed from "./components/community/NewsFeed/NewsFeed";
import SearchBar from "./components/community/SearchBar/SearchBar";

function CommunityPage() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <div className="main-content">
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
