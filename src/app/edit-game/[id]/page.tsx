"use client";
import { IGame } from "@/types/backend";
import axios from "axios";
import { useEffect, useState } from "react";

const EditGame = (props: any) => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState("");

  const { params } = props;

  useEffect(() => {
    const handleFetchGame = async () => {
      const res: any = await axios.get(
        "http://localhost:8000/games/" + params.id
      );
      setName(res.data.game.name);
      setImageURL(res.data.game.imageURL);
      setDescription(res.data.game.description);
      setLink(res.data.game.link);
      setRating(res.data.game.rating);
      console.log(res);
    };

    handleFetchGame();
  }, []);

  const handleSubmitEditGame = async (e: any) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/games/" + params.id, {
      name: e.target.name.value,
      imageURL: e.target.image.value,
      description: e.target.description.value,
      link: e.target.link.value,
      rating: e.target.rating.value,
    });
    if (res.data.message === "update game success") {
      alert("Update game success");
      window.location.href = "/";
    }
  };
  return (
    <div>
      <h1>Edit Game: {name}</h1>
      <form
        style={{ padding: "30px 100px" }}
        onSubmit={handleSubmitEditGame}
        className="needs-validation"
      >
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
          <textarea
            className="form-control"
            name="description"
            rows={3}
            placeholder="Game Bài Đẳng Cấp"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
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
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGame;
