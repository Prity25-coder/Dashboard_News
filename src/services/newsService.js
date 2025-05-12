const API_KEY = "YOUR_NEWS_API_KEY"; // Replace with your actual key
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async (query = "technology") => {
  try {
    const response = await fetch(
      `${BASE_URL}/everything?q=${query}&language=en&pageSize=50&apiKey=${API_KEY}`
    );
    const result = await response.json();
    if (result.status === "ok") {
      return result.articles.map((article) => ({
        title: article.title,
        author: article.author || "Unknown",
        type: "news",
        publishedAt: article.publishedAt.split("T")[0],
      }));
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
};
