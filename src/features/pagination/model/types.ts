export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePreviousPage: () => void;
  handleToPageNumber: (pageNumber: number) => void;
  handleNextPage: () => void;
}
