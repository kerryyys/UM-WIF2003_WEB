// import "../../../components-css/Community/ExploreList.css";
import ExploreItem from "./ExploreItem";

function ExploreList({ exploreListData }) {
  return (
    <div className="tw-w-4/5 tw-p-[20px] tw-rounded-lg tw-border tw-border-gray-400 tw-pl-0 tw-gap-[15px] tw-inline-flex tw-flex-column tw-flex-wrap tw-flex-col tw-items-center">
      {exploreListData.map((data, index) => (
        <ExploreItem
          key={index} // Assuming each data item has a unique 'id'
          companyImg={data.img}
          companyName={data.name}
        />
      ))}
    </div>
  );
}

export default ExploreList;
