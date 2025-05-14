const API_KEY = "pub_86925b39a2106efde3143db07b668ce49d32a";
const BASE_URL = "https://newsdata.io/api/1/news";

export const fetchTopHeadlines = async (query = "technology") => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&q=${query}&country=in&language=en&category=business,education,health,sports,technology`
    );
    const result = await response.json();

    if (result && result.results) {
      return result.results.map((article) => ({
        title: article.title,
        author: article.creator?.[0] || "Unknown",
        type: article.category?.[0] || "news",
        publishedAt: article.pubDate?.split(" ")[0] || "N/A",
      }));
    } else {
      throw new Error(result.message || "No results found");
    }
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
};
