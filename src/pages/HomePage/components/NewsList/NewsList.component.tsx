import NewsCard, { INewsCardProps } from "../NewsCard/NewsCard.component"; // Import your NewsCard component here

interface INewsListProps {
  newsData: INewsCardProps[]; // Assuming you have an array of news data
}

const NewsList = ({ newsData }: INewsListProps) => {
  return (
    <div className="news-list">
      {newsData.map((newsItem, index) => (
        <NewsCard
          key={index} // Provide a unique key for each NewsCard
          title={newsItem.title}
          subTitle={newsItem.subTitle}
          description={newsItem.description}
          date={newsItem.date}
          imgSrc={newsItem.imgSrc}
        />
      ))}
    </div>
  );
};

export default NewsList;
