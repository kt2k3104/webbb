"use client";
import axios from "axios";
import "@/app/styles.scss";
import { handleCreateGameAction } from "@/actions/games";

const AddGame = () => {
  const handleSubmitAddGame = async (e: any) => {
    e.preventDefault();

    const res = await handleCreateGameAction({
      name: e.target.name.value,
      imageURL: e.target.image.value,
      description: e.target.description.value,
      link: e.target.link.value,
      rating: e.target.rating.value,
    });
    if (res.message === "create game success") {
      alert("Create game success");
      window.location.href = "/";
    }
  };

  return (
    <form
      onSubmit={handleSubmitAddGame}
      className="add-game-wrapper needs-validation"
    >
      <h2>Add a new game</h2>
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
        ></input>
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

export default AddGame;
