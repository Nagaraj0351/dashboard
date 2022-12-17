import Sidebar from "../components/sidebar";
import DashboardComponent from "../components/dashboard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #fbf7f4;
`;

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <DashboardComponent />
    </Container>
  );
};

export default Dashboard;
