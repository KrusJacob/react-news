import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../..";
import styles from "./styles.module.css";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <div className={styles.description}>
        <h1>{item.title}</h1>
        <p>
          {item.description} ({item.language})
          <br />
          <a className={styles.link} target="_blank" href={item.url}>
            {` Read more...`}
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
        <ul>
          {item.category.map((item, i) => {
            return (
              <button key={i} className={styles.category}>
                {item}
              </button>
            );
          })}
        </ul>
      </div>
      <Image image={item.image} />
    </div>
  );
};

export default NewsDetails;
