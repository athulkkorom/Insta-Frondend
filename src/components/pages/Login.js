import MainLayout from "./MainLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      axios.post(`${process.env.REACT_APP_BACKEND_API}auth/login `, data)
      .then(response => {
        console.log(response.data.token);
        localStorage.setItem("auth",response.data.token)
        toast.success("User loggedin");
        navigate("/")

      })
      .catch(error => {
        console.log(error.response.data);
        toast.error("Login failed");

    })
}
    return (
        <MainLayout> 
     <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 border p-3">
            <h1>Login</h1>  
            <form onSubmit={handleSubmit(onSubmit)}>
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
 
export default Login;