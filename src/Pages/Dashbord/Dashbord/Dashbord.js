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
import './Dashbord.css'

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const { user } = useFirebase();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://radiant-island-49212.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    return (
        <div>
            <div className="container-flud w-100 ">
                <div className="row">
                    <div className="col-md-3 hight bg ">
                        <div className="p-3">
                            <Nav className="flex-column ">
                                <h4 className=" text fw-bold fs-3 my-4">Dashboard</h4>
                                {isAdmin && <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/manageOrder`}>
                                    Manage All Order
                                </Link>}
                                {isAdmin && <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/manageProducts`}>
                                    Manage All Products
                                </Link>}
                                {isAdmin ?
                                    <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/addBlog`}>
                                        Add Blog
                                    </Link>
                                    :
                                    <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}`}>
                                        Profile
                                    </Link>
                                }
                                {isAdmin ?
                                    <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/addProduct`}>
                                        Add Product
                                    </Link>
                                    :
                                    <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/myorder`}>
                                        My Order list
                                    </Link>
                                }
                                {isAdmin ? <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/makeAdmin`}>
                                    Make Admin
                                </Link>
                                    :
                                    <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/payment`}>
                                        Payment
                                    </Link>
                                }

                                {isAdmin ?
                                    <Link to={`${url}/addService`}>
                                        Add Service
                                    </Link>
                                    :
                                    <Link className="text-decoration-none text fw-bold fs-5 p-2 mx-auto" to={`${url}/review`}>
                                        Give Review
                                    </Link>
                                }
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
                        </Switch>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashbord;