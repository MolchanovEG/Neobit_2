import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import NewsPagination from "../components/Pagination";
import Loader from "../components/Loader";

const API_URL = "http://localhost:5143/api/news";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(
    Number(new URLSearchParams(location.search).get("page")) || 1
  );
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const limit = 12;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await axios.get(API_URL, {
        params: { page, limit },
      });
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
      setLoading(false);
    };

    fetchNews();
  }, [page]);

  const totalPages = Math.ceil(totalResults / limit);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2}>
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                id={index + (page - 1) * limit}
                currentPage={page}
              />
            ))}
          </Grid>
          <NewsPagination
            page={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
