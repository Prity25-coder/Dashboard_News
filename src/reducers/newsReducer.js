const initialState = {
  articles: [],
  blogs: [],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_NEWS_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        blogs: action.payload.blogs,
      };
    case "FETCH_NEWS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
