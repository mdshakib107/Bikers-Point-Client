import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import AddBlog from "../../HomePage/BlogsSection/AddBlog/AddBlog";
import AddProduct from "../Admin/AddProduct/AddProduct";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import ManageOrders from "../Admin/ManageAllOrder/ManageOrders/ManageOrders";
import ManageProducts from "../Admin/ManageAllProduct/ManageProducts/ManageProducts";
import GiveReview from "../User/GiveReview/GiveReview";
import MyOrders from "../User/MyAllOrders/MyOrders/MyOrders";
import Payment from "../User/Payment/Payment";
import UserProfile from "../User/UserProfile/UserProfile";

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const { user } = useFirebase();
    const [isAdmi, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data[0]?.role === "admin") {
    //                 setIsAdmin(true);
    //             } else {
    //                 setIsAdmin(false);
    //             }
    //         });
    // }, [user?.email]);
    // console.log(isAdmi);

    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            <Nav className="flex-column bg-dark ">
                                <Link to={`${url}`}>
                                    Profile
                                </Link>
                                <Link to={`${url}/myorder`}>
                                    My Order list
                                </Link>
                                <Link to={`${url}/payment`}>
                                    Payment
                                </Link>
                                <Link to={`${url}/review`}>
                                    Give Review
                                </Link>
                                <Link to={`${url}/manageOrder`}>
                                    Manage All Order
                                </Link>
                                <Link to={`${url}/manageProducts`}>
                                    Manage All Products
                                </Link>
                                <Link to={`${url}/addProduct`}>
                                    Add Product
                                </Link>
                                <Link to={`${url}/addBlog`}>
                                    Add Blog
                                </Link>
                                <Link to={`${url}/makeAdmin`}>
                                    Make Admin
                                </Link>

                                {/* {isAdmi ? (
                                    <Link to={`${url}/addService`}>
                                        Add Service
                                    </Link>
                                )} */}
                                {/* <Link to={`${url}/manageServices`}>
                                        <li className="dashboard-menu">Manage Service
                                    </Link> */}
                            </Nav>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <UserProfile></UserProfile>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <GiveReview></GiveReview>
                            </Route>
                            <Route exact path={`${path}/myorder`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/manageOrder`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                            <Route exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/addBlog`}>
                                <AddBlog></AddBlog>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            {/* <Route exact path={`${path}/manageServices`}>
                                <ManageServices></ManageServices>
                            </Route> */}
                        </Switch>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashbord;