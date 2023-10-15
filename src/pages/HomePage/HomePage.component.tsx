import { useEffect, useState } from "react";
import NewsList from "./components/NewsList/NewsList.component";
import { mockNewsData } from "../../data/mock/newsData";

function HomePage() {
  const [newsData, setNewsData] = useState(mockNewsData);

  useEffect(() => {}, []);
  return (
    <>
    <div className="home-page-content-wrapper">
      <NewsList newsData={newsData} />
    </div>
    </>
  );
}

export default HomePage;
