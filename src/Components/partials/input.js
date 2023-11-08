
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './partials.css'
export function Input() {
  return (
    <div className="input-group mt-4 mb-4 row-1">
      <span className="input-group-text" id="basic-addon1">Name : </span>
      <input
        type="text"
        size={4}
        className="form-control form-control-lg col-1" // Adjust the col class as needed
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

  );
}
