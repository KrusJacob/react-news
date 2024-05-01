import NewsList from "@/widgets/news/ui/NewsList";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePrevPage, handlePageClick } = usePaginationNews(filters);
  const dipatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickToNews = (news: INews) => {
    dipatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

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
        <NewsList onClickToNews={onClickToNews} type="item" direction="column" news={news} isLoading={isLoading} />
      </PaginationWrapper>
    </>
  );
};

export default NewsListWithPagination;
