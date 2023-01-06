import React from "react";

const VisibilityControl = ({ setShowTaskDone, cleanTask, isChecked }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
        className="form-check-input"
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setShowTaskDone(e.target.checked)}
        ></input>{" "}
      </div>

      <label>Tasks completed</label>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
};

export default VisibilityControl;
