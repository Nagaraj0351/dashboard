import styles from "../../styles/Sidebar.module.css";
import styled from "styled-components";
import { useRouter } from "next/router";

const Logout = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #888;
  font-size: 14px;
  font-weight: bold;
  width: max-content;
  margin: auto;
  bottom: 30px;
  position: absolute;
  right: 30px;
  cursor: pointer;
  border: none;
`;

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li>Dashboard</li>
        <li>Education</li>
        <li>Resources</li>
        <li>settings</li>
      </ul>

      <Logout onClick={() => router.push("/")}>Logout</Logout>
    </div>
  );
};

export default Sidebar;
