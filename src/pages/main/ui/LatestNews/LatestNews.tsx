import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news";
import { useAppDispatch } from "@/app/appStore";
import { INews } from "@/entities/news";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dipatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dipatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        viewNewsSlot={(news) => <a onClick={() => navigateTo(news)}>view more...</a>}
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
