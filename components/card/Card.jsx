import styles from "@/components/card/card.module.css";

export const Card = ({ name, description, price }) => {
  return (
    <div className={styles.card}>
      <h3>{name ?? "Товар"}</h3>
      <p>{description ?? "В разработке"}</p>
      <span className={styles.link}>
        <span>{price ?? 0}</span>$
      </span>
    </div>
  );
};
