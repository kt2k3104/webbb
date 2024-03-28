"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const AddContent = (props: any) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageURL, setImageURL] = useState("");

  const { params } = props;

  const handleSubmitAddContent = async (e: any) => {
    e.preventDefault();

    const res = await axios.post(`http://143.110.146.15/contents`, {
      title,
      contents,
      imageURL,
      page: params.page,
    });
    if (res.data.message === "create review success") {
      alert("Create review success");
      setTitle("");
      setContents("");
      setImageURL("");
    }
  };

  return (
    <form
      style={{ padding: "0 100px 30px" }}
      onSubmit={handleSubmitAddContent}
      className="needs-validation"
    >
      <Link href={"/add-content"}>return</Link>
      <h2>Add Content Page: Trang Chủ</h2>
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
          Contents: (use {`"`}
          {"//enter"}
          {`"`} for line break)
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

      <div className="col-12" style={{ textAlign: "center" }}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddContent;
