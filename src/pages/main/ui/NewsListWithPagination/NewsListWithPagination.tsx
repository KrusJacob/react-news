import NewsList from "@/widgets/news/ui/NewsList";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePrevPage, handlePageClick } = usePaginationNews(filters);

  return (
    <>
      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      >
        <NewsList type="item" direction="column" news={news} isLoading={isLoading} />
      </PaginationWrapper>
    </>
  );
};

export default NewsListWithPagination;
