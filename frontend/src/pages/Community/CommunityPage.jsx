import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import NewsFeed from "../../components/community/NewsFeed/NewsFeed";
import ProfileCard from "../../components/community/ProfileCard/ProfileCard";
import ExploreList from "../../components/community/NewsFeed/ExploreList/ExploreList";
import { exploreListData } from "../../components/community/data";
import { getAllPosts } from "../../api/postApi";

function CommunityPage() {
  const [newsFeedList, setNewsFeedList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setNewsFeedList(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="tw-px-12">
      <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-12 tw-gap-5 mt-5">
        <div className="tw-hidden xl:tw-flex xl:tw-flex-col xl:tw-items-center xl:tw-gap-y-5 xl:tw-col-span-3">
          <ProfileCard
            name="Mehrab Bozorgi"
            title="Bachelor of Software Engineering"
          />
          <ExploreList exploreListData={exploreListData} />
        </div>

        <div className="xl:tw-col-span-8 tw-pl-5">
          <NewsFeed newsFeedList={newsFeedList} />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
