
import MainLayout from "./MainLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post(`${process.env.REACT_APP_BACKEND_API}auth/register`, data)
      .then(response => {
        console.log(response.data);
        toast.success("User registerd");
        navigate("/login")
      })
      .catch(error => {
        console.log(error.response.data);
        toast.error("User registration failled")
      });
  };

  return ( 
    <MainLayout>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 border p-3">
            <h1>signup</h1>  
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  fullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  {...register("fullName", { required: true })}
                />
                <div className="form-text text-danger">
                  Full Name is required
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  userName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  {...register("userName", { required: true })}
                />
                <div className="form-text text-danger">
                  username is required
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email", { required: true })}
                />
                <div className="form-text text-danger">
                  Email is required
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", { required: true })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Signup;

