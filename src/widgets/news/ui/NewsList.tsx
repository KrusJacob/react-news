import { INews, NewsCard } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
  type: "banner" | "item";
  direction?: "row" | "column";
  onClickToNews: (news: INews) => void;
}

const NewsList = ({ news, type = "item", onClickToNews }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard type={type} onClickToNews={onClickToNews} key={item.id} item={item} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
