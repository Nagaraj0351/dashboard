import styles from "../../styles/Dashboard.module.css";
import styled from "styled-components";

const Report = styled.div`
  background-color: #aabbbd;
  background-image: linear-gradient(to right, #ddddcb, #aabbbd);
  width: 100%;
  min-height: 150px;
  padding: 10px;
`;

const Task = styled.div`
  flex: 1;
  background-color: #fff5dc;
  background-image: linear-gradient(to top, #e1cac4, #fff5dc);
  min-height: 200px;
  padding: 10px;
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 14px;
  color: #888;
`;

const TodayPlan = () => {
  return (
    <div className={`${styles.container} ${styles.todayPlan}`}>
      <div className="heading">
        <Heading>Today's Plan</Heading>
        <Date>June 14th, 2022</Date>
      </div>
      <h2>Sustainable development goals and health innovation</h2>
      <Report>Weekly Report</Report>
      <div className={styles.taskContainer}>
        <Task>Study 78x</Task>
        <Task>Analysys</Task>
      </div>
    </div>
  );
};

export default TodayPlan;
