import axios from "axios";

const NewsArticleList = ({ articles, category }) => {
  return (
    <div>
      <h1>Showing news for category {category}</h1>
      {articles.map((news) => {
        return (
          <div key={news.id}>
            <h2>
              {news.id} - {news.title} | {news.category}
            </h2>
            <p>{news.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  // console.log(req.headers.cookie);
  console.log({ query });
  const { category } = params;
  res.setHeader("Set-Cookie", ["name=Saheb"]);
  const { data } = await axios.get(`http://localhost:4000/news?category=${category}`);
  console.log(`Generating articles page for category ${category}`);
  return {
    props: {
      articles: data,
      category: category,
    },
  };
}
