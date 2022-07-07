import React,{ useEffect } from "react";
import Sidebar from "./Sidebar.js"
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";



const Dashboard = () => {
  // const dispatch = useDispatch();

  // const { products } = useSelector((state) => state.products);

  // let outOfStock = 0;
  // // let totalAmount = 0;
  //   // orders &&
  //   //   orders.forEach((item) => {
  //   //     totalAmount += item.totalPrice;
  //   //   });
  // products &&
  //   products.forEach((item) => {
  //     if (item.Stock === 0) {
  //       outOfStock += 1;
  //     }
  //   });

  //   useEffect(() => {
  //   // dispatch(getAllUsers());{
  //     dispatch(getAdminProduct());
  //     // dispatch(getAllOrders());
  //     // dispatch(getAllUsers());
  //   }, [dispatch]);
  
  //   // let totalAmount = 0;
  //   // orders &&
  //   //   orders.forEach((item) => {
  //   //     totalAmount += item.totalPrice;
  //   //   });
  


  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹2000
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>50</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>4</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>2</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


        {/* <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}