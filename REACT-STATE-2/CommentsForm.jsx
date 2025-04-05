import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    ratings: "5",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
        username: "",
        remark: "",
        ratings: "5",
      });
  };
  return (
    <div>
      <h4>give a comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <br />

        <label htmlFor="remark">Remarks : </label>
        <textarea
          value={formData.remark}
          id="remark"
          placeholder="add few remarks"
          onChange={handleInputChange}
          name="remark"
        >
        </textarea>
        <br />
        <br />
        <br />

        <label htmlFor="rating">Ratings : </label>
        <input
          type="number"
          id="rating"
          placeholder="ratings"
          name="ratings"
          min={1}
          max={5}
          value={formData.ratings}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <button>Add comment</button>
      </form>
    </div>
  );
}
