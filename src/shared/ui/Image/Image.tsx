import styles from "./styles.module.css";
import newsImageStub from "@/shared/assets/news.png";

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  const srcImage = image && image !== "None" ? image : newsImageStub;
  return (
    <div className={styles.wrapper}>
      {image ? <img src={srcImage} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
