"use client";

import CloseOutlined from "@ant-design/icons/CloseOutlined";
import { Button } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/app/styles.scss";

const EditContent = (props: any) => {
  const [contents, setContents] = useState<any[]>([]);
  const [selectContent, setSelectContent] = useState<any | null>(null);

  const { params } = props;

  useEffect(() => {
    const handleGetContent = async () => {
      try {
        const res = await axios.get(
          `http://143.110.146.15/contents/${params.page}`
        );
        setContents(res.data.contents);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetContent();
  }, []);

  const handleSubmitUpdateContent = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://143.110.146.15/contents/${selectContent?.id}`,
        {
          title: selectContent?.title,
          contents: selectContent?.contents,
          imageURL: selectContent?.imageURL,
        }
      );
      if (res.data.message === "update review success") {
        alert("Update review success");
        window.location.href = `/review-game/${params.gameid}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-review-id-wrapper">
      <Link
        style={selectContent ? { display: "none" } : { display: "block" }}
        href={"/edit-content"}
      >
        Return
      </Link>
      <h1 style={selectContent ? { display: "none" } : { display: "block" }}>
        List contents:
      </h1>
      <div className="edit-review-id-content">
        <div
          style={selectContent ? { display: "none" } : { display: "block" }}
          className="edit-review-id-content-list"
        >
          {contents.map((review: any) => {
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
                  onClick={() => setSelectContent(review)}
                >
                  {review.title}
                </p>
              </div>
            );
          })}
        </div>
        <form
          style={
            selectContent
              ? { flex: "1", position: "relative" }
              : { display: "none" }
          }
          onSubmit={handleSubmitUpdateContent}
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
            onClick={() => setSelectContent(null)}
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
            Edit review: {selectContent?.title}
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
              value={selectContent?.title}
              onChange={(e) => {
                setSelectContent((prev: any) => {
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
              value={selectContent?.contents}
              onChange={(e) => {
                setSelectContent((prev: any) => {
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
              value={selectContent?.imageURL}
              onChange={(e) => {
                setSelectContent((prev: any) => {
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
export default EditContent;
