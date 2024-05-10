import { Routes, Route } from "react-router-dom";
import { SigninSignoutMiddleware } from "../../middlewares/SigninSignoutMiddleware";
import { LoggedInUserMiddleware } from "../../middlewares/LoggedInUserMiddleware";
import Layout from "../Layout/Layout";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import AddBlog from "../AddBlog/AddBlog";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import ParticularBlog from "../ParticularBlog/ParticularBlog";
import MyBlogs from "../myBlogs/myBlogs";
import PageNotFound from "../PageNotFound/PageNotFound";
import EditBlog from "../myBlogs/EditBlog";
import { Profile } from "../AccountInfo/Profile";
import { ChangePassword } from "../AccountInfo/ChangePassword";
import { AccountInfo } from "../AccountInfo/AccountInfo";
import { ForgetPassword } from "../ForgetPassword/ForgetPassword";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/signin"
          element={
            <SigninSignoutMiddleware>
              <Layout>
                <Signin />
              </Layout>
            </SigninSignoutMiddleware>
          }
        />

        <Route
          path="/signup"
          element={
            <SigninSignoutMiddleware>
              <Layout>
                <Signup />
              </Layout>
            </SigninSignoutMiddleware>
          }
        />

        <Route
          path="/forget-password"
          element={
            <SigninSignoutMiddleware>
              <Layout>
                <ForgetPassword />
              </Layout>
            </SigninSignoutMiddleware>
          }
        />

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route path="/blog">
          <Route
            index
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path=":id"
            element={
              <Layout>
                <ParticularBlog />
              </Layout>
            }
          />

          <Route path="u">
            <Route
              index
              element={
                <LoggedInUserMiddleware>
                  <Layout>
                    <MyBlogs />
                  </Layout>
                </LoggedInUserMiddleware>
              }
            />
            <Route
              path="update/:id"
              element={
                <LoggedInUserMiddleware>
                  <Layout>
                    <EditBlog />
                  </Layout>
                </LoggedInUserMiddleware>
              }
            />
          </Route>
          <Route
            path="add"
            element={
              <LoggedInUserMiddleware>
                <Layout>
                  <AddBlog />
                </Layout>
              </LoggedInUserMiddleware>
            }
          />
        </Route>

        <Route
          path="/accountInfo"
          element={
            <LoggedInUserMiddleware>
              <Layout>
                <AccountInfo />
              </Layout>
            </LoggedInUserMiddleware>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>

        <Route
          path="*"
          element={
            <Layout>
              <PageNotFound />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
