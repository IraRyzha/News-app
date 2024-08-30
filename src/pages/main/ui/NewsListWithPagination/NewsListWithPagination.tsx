import NewsList from "@/widgets/news/ui/NewsList/NewsList.js";
import { TOTAL_PAGES } from "@/shared/constants/constants.js";
import { Pagination } from "@/features/pagination/index.js";
import { IFilters } from "@/shared/interfaces/index.js";
import { INews } from "@/entities/news/index.js";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews.js";

interface Props {
  news: INews[];
  filters: IFilters;
  isLoading: boolean;
}

function NewsListWithPagination({ news, filters, isLoading }: Props) {
  const { handlePreviousPage, handleToPageNumber, handleNextPage } =
    usePaginationNews(filters);

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
      />
    </Pagination>
  );
}

export default NewsListWithPagination;
