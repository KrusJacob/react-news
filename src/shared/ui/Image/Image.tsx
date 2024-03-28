import styles from "./styles.module.css";

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image && image !== "None" ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
