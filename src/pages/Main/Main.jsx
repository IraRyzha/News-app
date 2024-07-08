import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Skeleton from "../../components/Skeleton/Skeleton";
import styles from "./styles.module.css";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage, pageSize) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, pageSize);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleToPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <main className={styles.main}>
      {!isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={"1"} type={"banner"} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      />
    </main>
  );
}

export default Main;
