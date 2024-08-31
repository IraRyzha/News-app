import NewsList from "@/widgets/news/ui/NewsList/NewsList.js";
import { TOTAL_PAGES } from "@/shared/constants/constants.js";
import { Pagination } from "@/features/pagination/index.js";
import { IFilters } from "@/shared/interfaces/index.js";
import { INews } from "@/entities/news/index.js";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews.js";
import { useAppDispatch } from "@/app/appStore.js";
import { setCurrentNews } from "@/entities/news/model/newsSlice.js";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";

interface Props {
  news: INews[];
  filters: IFilters;
  isLoading: boolean;
}

function NewsListWithPagination({ news, filters, isLoading }: Props) {
  const { handlePreviousPage, handleToPageNumber, handleNextPage } =
    usePaginationNews(filters);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <Pagination
      top
      bottom
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
      handlePreviousPage={handlePreviousPage}
      handleToPageNumber={handleToPageNumber}
      handleNextPage={handleNextPage}
    >
      <NewsList
        type="item"
        direction="column"
        isLoading={isLoading}
        news={news}
        viewNews={(news: INews) => (
          <p className={styles.viewMore} onClick={() => navigateTo(news)}>
            view more...
          </p>
        )}
      />
    </Pagination>
  );
}

export default NewsListWithPagination;
