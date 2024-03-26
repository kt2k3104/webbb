"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/app/styles.scss";
import {
  handleDeleteGameAction,
  handleUpdateGameAction,
} from "@/actions/games";
import { Button, Modal } from "antd";

const EditGame = (props: any) => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { params } = props;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    await handleDeleteGameAction(params.id);
    alert("delete game success");
    window.location.href = "/";
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleFetchGame = async () => {
      const res: any = await axios.get(
        "http://143.110.146.15/games/" + params.id
      );
      setName(res.data.game.name);
      setImageURL(res.data.game.imageURL);
      setDescription(res.data.game.description);
      setLink(res.data.game.link);
      setRating(res.data.game.rating);
    };

    handleFetchGame();
  }, []);

  const handleSubmitEditGame = async (e: any) => {
    e.preventDefault();
    const res = await handleUpdateGameAction(
      {
        name: e.target.name.value,
        imageURL: e.target.image.value,
        description: e.target.description.value,
        link: e.target.link.value,
        rating: e.target.rating.value,
      },
      params.id
    );
    if (res.message === "update game success") {
      alert("Update game success");
      window.location.href = "/";
    }
  };
  return (
    <div className="edit-game-id-wrapper">
      <Link href={"/edit-game"}>return</Link>
      <div className="edit-game-id-header">
        <h1>Edit Game: {name}</h1>
        <Button
          onClick={() => {
            showModal();
          }}
        >
          Delete Game
        </Button>
        <Modal
          title="Delete Game"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ marginTop: "20vh" }}
        >
          <p>Are you sure you want to delele this game?</p>
        </Modal>
      </div>
      <form onSubmit={handleSubmitEditGame} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name Game
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Gowin"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
            required
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            name="description"
            placeholder="Game Bài Đẳng Cấp"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Link Game
          </label>
          <input
            name="link"
            type="text"
            placeholder="https://s26betf.cc/"
            className="form-control"
            required
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating Game
          </label>
          <input
            name="rating"
            type="text"
            placeholder="5.0"
            className="form-control"
            required
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
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
    </div>
  );
};

export default EditGame;
