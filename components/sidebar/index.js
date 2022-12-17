import styles from "../../styles/Sidebar.module.css";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../slices/authSlice";

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
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthState(false));
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li>Dashboard</li>
        <li>Education</li>
        <li>Resources</li>
        <li>settings</li>
      </ul>

      <Logout onClick={handleLogout}>Logout</Logout>
    </div>
  );
};

export default Sidebar;
