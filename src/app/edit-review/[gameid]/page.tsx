"use client";

import { IReview } from "@/types/backend";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const EditGame = (props: any) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [selectReview, setSelectReview] = useState<IReview | null>(null);

  const { params } = props;

  useEffect(() => {
    const handleGetReview = async () => {
      const res = await axios.get(
        `http://143.110.146.15/reviews/${params.gameid}`
      );
      setReviews(res.data.reviews);
    };
    handleGetReview();
  }, []);

  const handleSubmitUpdateReview = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(
      `http://143.110.146.15/reviews/${selectReview?.id}`,
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
    <div style={{ padding: "0 100px 30px" }}>
      <Link href={"/edit-review"}>Return</Link>
      <h1>List reviews:</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          {reviews.map((review: any) => {
            return (
              <div
                key={review.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>-</p>
                <p
                  key={review.id}
                  style={{
                    color: "blue",
                    display: "block",
                    textDecoration: "underline",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectReview(review)}
                >
                  {review.title}
                </p>
              </div>
            );
          })}
        </div>
        <form
          style={
            selectReview
              ? { flex: "1", position: "relative" }
              : { display: "none" }
          }
          onSubmit={handleSubmitUpdateReview}
        >
          <Button
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setSelectReview(null)}
          >
            <CloseOutlined />
          </Button>
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
              Contents: (use {`"`}
              {"//enter"}
              {`"`} for line break)
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

          <div className="col-12" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditGame;
