import styles from "../../styles/Dashboard.module.css";
import Card from "../common/Card";

const Notification = ({ notifications }) => {
  return (
    <div className={styles.container}>
      <h4>Notifications</h4>
      {notifications.length > 0 &&
        notifications.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Notification;
