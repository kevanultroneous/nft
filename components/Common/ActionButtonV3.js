import styles from "@/styles/components/home/Products.module.css";

const ActionButtonV3 = ({ text, backc, borderc }) => {
  return (
    <div className={styles.outer}>
      <div
        className={styles.button}
        style={{
          background: backc,
          border: borderc,
        }}
      >
        <div classNane={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default ActionButtonV3;