import React from "react";

export default function BtnGroup({ btns, handleDelete }) {
  return (
    <div>
      <div className="list-group">
        {/* <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button> */}
        {
        
        btns.map((value, index) => (
          <button
          key={index}
          onClick={handleDelete(index)}
                type="button"
                className="list-group-item list-group-item-action"
              >
                {value}
              </button>
        ))}
    
        
        
      </div>
    </div>
  );
}
