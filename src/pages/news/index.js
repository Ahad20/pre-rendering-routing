import axios from "axios";

const NewsArticleList = ({ newsList }) => {
  return (
    <div>
      <h1>News Article List</h1>
      {newsList.map((news) => {
        return (
          <h2 key={news.id}>
            {news.id} - {news.title} | {news.category}
          </h2>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:4000/news");
  console.log(`Generating articles page`);
  return {
    props: {
      newsList: data,
    },
  };
}
