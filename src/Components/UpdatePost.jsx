import React, { useState } from 'react'

const UpdatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [device, setDevice] = useState("");
  
    const handleSubmit = (userID) => {
        const payload = {
            title,
            body,
            device,
          };
          console.log(payload);
          fetch(`https://sore-rose-dolphin-tam.cyclic.app/posts/update/${userID}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
              "Content-type": "application/json",
              "Authorization":localStorage.getItem("token")
            },
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        };
      
  
    return (
        <div>
        <h3>Posts Create Page</h3>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Device"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
}

export default UpdatePost
