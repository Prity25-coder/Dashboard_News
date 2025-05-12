import axios from "axios";

export const fetchNewsData = () => async (dispatch) => {
  dispatch({ type: "FETCH_NEWS_REQUEST" });

  try {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
    );
    const articles = res.data.articles;

    // Split into articles and blogs (dummy logic here)
    const blogs = articles.filter((a) => a.source.name === "TechCrunch");
    const news = articles.filter((a) => a.source.name !== "TechCrunch");

    dispatch({
      type: "FETCH_NEWS_SUCCESS",
      payload: {
        articles: news,
        blogs: blogs,
      },
    });
  } catch (error) {
    dispatch({ type: "FETCH_NEWS_FAILURE", payload: error.message });
  }
};
