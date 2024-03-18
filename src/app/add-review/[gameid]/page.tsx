"use client";
import axios from "axios";
import { useState } from "react";

const AddGame = (props: any) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageURL, setImageURL] = useState("");

  const { params } = props;

  const handleSubmitAddReview = async (e: any) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/reviews", {
      title,
      contents,
      imageURL,
      gameid: params.gameid,
    });
    console.log(res);
    if (res.data.message === "create review success") {
      alert("Create review success");
      setTitle("");
      setContents("");
      setImageURL("");
    }
  };

  return (
    <form
      style={{ padding: "30px 100px" }}
      onSubmit={handleSubmitAddReview}
      className="needs-validation"
    >
      <h2>Add Review Game:</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="invalid-feedback">Please choose a username.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="contents" className="form-label">
          Contents: (use {`"`}\n{`"`} for new line)
        </label>
        <textarea
          className="form-control"
          name="description"
          rows={3}
          required
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        ></textarea>
        <div className="invalid-feedback">Please choose a username.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        />
        <div className="invalid-feedback">Please choose a username.</div>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddGame;
