import "./App.css";
import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [object, setObject] = useState([]);
  const [id, setId] = useState(0);

  const onSubmits = (event) => {
    event.preventDefault();
    const obj = { id: id, name: name, description: description, size: size };
    setId(id + 1);
    setObject([...object, obj]);
  };

  const deleteProperty = (id) => {
    console.log(id.target);
    const updatedObject = object.filter((property) => property.id != id);
    setObject(updatedObject);
  };

  const nameHandler = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const descHandler = (event) => {
    // console.log(event.target.value);
    setDescription(event.target.value);
  };

  const sizeHandler = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="container">
      <button
        onClick={() => setShowAddTask((prevState) => !prevState)}
        style={{
          height: "30px",
          width: "160px",
          float: "right",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        Add new Property
      </button>
      {showAddTask ? (
        <form onSubmit={onSubmits}>
          <div className="add-task-dialog">
            <div>
              <label style={{ marginRight: "50px" }}>Name:</label>
              <input onChange={nameHandler} type="text" />
            </div>
            <div>
              <label
                style={{
                  marginRight: "12px",
                  verticalAlign: "top",
                }}
              >
                Description:
              </label>
              <textarea rows="4" cols="50" onChange={descHandler} />
            </div>
            <div>
              <label style={{ marginRight: "63px" }}>Size:</label>
              <input onChange={sizeHandler} type="text" />
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="add-task-actions">
            <button
              style={{ marginLeft: "104px", width: "100px", height: "25px" }}
              className="add-btn"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      ) : null}

      <div style={{ paddingTop: "50px" }} className="description">
        <Table obj={object} deleteProperty={deleteProperty} />
      </div>
    </div>
  );
}

export default App;
