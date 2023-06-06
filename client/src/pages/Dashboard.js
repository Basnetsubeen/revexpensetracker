import React, { useEffect } from "react";
import MainLayout from "../components/Layout/MainLayout";
import TransactionForm from "../components/Layout/form/TransactionForm";
import TransactionTable from "../components/Layout/form/TransactionTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !user._id && navigate("/");
  }, [user, navigate]);

  return (
    <MainLayout>
      <TransactionForm />
      <hr />
      <TransactionTable />
    </MainLayout>
  );
};

export default Dashboard;
