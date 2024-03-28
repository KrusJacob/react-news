export interface IPaginationProps {
  totalPages: number;
  handlePageClick: (numberPage: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
}
