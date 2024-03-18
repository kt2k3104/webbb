"use client";

import { IReview } from "@/types/backend";
import axios from "axios";
import { useEffect, useState } from "react";

const EditGame = (props: any) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [selectReview, setSelectReview] = useState<IReview | null>(null);

  const { params } = props;

  useEffect(() => {
    const handleGetReview = async () => {
      const res = await axios.get(
        `http://localhost:8000/reviews/${params.gameid}`
      );
      setReviews(res.data.reviews);
      console.log(res.data.reviews);
    };
    handleGetReview();
  }, []);

  const handleSubmitUpdateReview = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:8000/reviews/${selectReview?.id}`,
      {
        title: selectReview?.title,
        contents: selectReview?.contents,
        imageURL: selectReview?.imageURL,
      }
    );
    if (res.data.message === "update review success") {
      alert("Update review success");
      window.location.href = `/review-game/${params.gameid}`;
    }
  };

  return (
    <div style={{ padding: "0 100px", width: "100vw" }}>
      <h1>Edit review</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          {reviews.map((review: any) => {
            return (
              <p
                key={review.id}
                style={{
                  color: "blue",
                  display: "block",
                  marginTop: "10px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setSelectReview(review)}
              >
                {review.title}
              </p>
            );
          })}
        </div>
        <form style={{ flex: "1" }} onSubmit={handleSubmitUpdateReview}>
          <h3
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Edit review: {selectReview?.title}
          </h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Gowin"
              required
              value={selectReview?.title}
              onChange={(e) => {
                setSelectReview((prev: any) => {
                  return { ...prev, title: e.target.value };
                });
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
              placeholder="Game Bài Đẳng Cấp"
              required
              value={selectReview?.contents}
              onChange={(e) => {
                setSelectReview((prev: any) => {
                  return { ...prev, contents: e.target.value };
                });
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
              placeholder="https://your-image-URL"
              value={selectReview?.imageURL}
              onChange={(e) => {
                setSelectReview((prev: any) => {
                  return { ...prev, imageURL: e.target.value };
                });
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
      </div>
    </div>
  );
};
export default EditGame;
