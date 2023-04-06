import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function MainLayout(props) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const authCheck = () => {
    let token = localStorage.getItem("token");
    if (token) {
      return axios
        .get(`${process.env.REACT_APP_BACKEND_API}profile`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };

  const authUrl = ["/"];

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isLoggedin = await authCheck();
        if (isLoggedin && !authUrl.includes(location.pathname)) {
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLogin();
  }, []);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate('/')
    }
  })

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              Instagram
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <Link to={"/signup"} className="nav-link">
                  Signup
                </Link>

                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {props.children}
    </>
  );
}
