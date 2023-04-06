import { useState } from "react";
import { useForm } from "react-hook-form";
import UploadImage from "./UploadImage";

export default function CreateFeed(props) {
  const [tab, setTab] = useState("image");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const createPost = data => console.log(data);
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${tab === "image" && "active"}`}
                onClick={() => setTab("image")}
              >
                Image
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${tab === "video" && "active"}`}
                onClick={() => setTab("video")}
              >
                Video
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-text">Uploads</h5>
          <form onSubmit={handleSubmit(createPost)}>
            <div className="mb-3 d-flex justify-content-center" style={{ width: "40rem" }}>
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Description
              </label>
              <input
                className="form-control"
                id="description"
                rows={3}
                defaultValue={""}
                {...register("Description", { required: true })}
              />
            </div>
            <UploadImage />
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </div>
      </div>

      {props.children}
    </>
  );
}
