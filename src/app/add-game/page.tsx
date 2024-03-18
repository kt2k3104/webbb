"use client";
import axios from "axios";

const AddGame = () => {
  const handleSubmitAddGame = async (e: any) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/games", {
      name: e.target.name.value,
      imageURL: e.target.image.value,
      description: e.target.description.value,
      link: e.target.link.value,
      rating: e.target.rating.value,
    });
    if (res.data.message === "create game success") {
      alert("Create game success");
      window.location.href = "/";
    }
  };

  return (
    <form
      style={{ padding: "30px 100px" }}
      onSubmit={handleSubmitAddGame}
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
        <textarea
          className="form-control"
          name="description"
          rows={3}
          placeholder="Game Bài Đẳng Cấp"
          required
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
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddGame;
