import { useState } from "react";

function Content() {
  const [input, setInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div
        className="form-group"
        style={{
          height: "100vh",
          width: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <label>Enter Something Below</label>
          <textarea
            className="form-control"
            id="1"
            rows="3"
            value={input}
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-primary" onClick={handleClick}>
            Show Text
          </button>
          {isToggled && <h1>{input}</h1>}
        </div>
      </div>
    </>
  );
}

export default Content;
