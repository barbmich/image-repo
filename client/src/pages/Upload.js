import { createRef, useState } from "react";
import axios from "axios";

function Upload() {
  const [images, setImages] = useState([]);
  const [username, setUsername] = useState("");
  const fileInput = createRef();

  function handleSubmit(event) {
    event.preventDefault();
    let form_data = new FormData();
    form_data.append("user", username);
    for (const image of images) {
      form_data.append("image", image);
    }
    axios
      .post("/upload", form_data, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleImageChange(event) {
    event.preventDefault();
    const newImages = [];
    for (const file of event.target.files) {
      newImages.push(file);
    }
    setImages([...newImages]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          name="image"
          ref={fileInput}
          multiple={true}
          onChange={handleImageChange}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Upload;
