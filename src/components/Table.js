import "./Table.css";
import { useState, useEffect } from "react";

function Table(props) {
  const { obj } = props;
  // const { name, description, size } = obj;

  useEffect(() => {
    console.log(obj);
  }, [obj]);

  function propertyBoxRender(id, name, description, size) {
    return (
      <div>
        <div className="showdata" style={{ marginTop: "10px" }}>
          <div style={{ width: "180px", textAlign: "center" }}>{name}</div>
          <div
            style={{
              width: "450px",
              overflow: "auto",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            {description}
          </div>
          <div style={{ width: "200px", textAlign: "center" }}>{size}</div>
          <div style={{ marginLeft: "15px" }}>
            <button onClick={() => props.deleteProperty(id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: "10px 10px",
        border: "1px solid black",
        width: "840px",
      }}
      className="show-container"
    >
      <div className="headings">
        <h4 style={{ width: "180px", marginRight: "0px" }}>Name</h4>
        <h4 style={{ width: "450px", marginLeft: "0px", marginRight: "0px" }}>
          Description
        </h4>
        <h4 style={{ width: "180px" }}>Size</h4>
      </div>
      {obj.map((data) =>
        propertyBoxRender(data.id, data.name, data.description, data.size)
      )}
    </div>
  );
}

export default Table;
