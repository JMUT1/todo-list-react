import React from 'react'

const VisibilityControl = ({setShowTaskDone, cleanTask, isChecked}) => {

    const handleDelete = ()=>{
        if(window.confirm("Are you sure you want to delete")){
            cleanTask();
        }


    }
  return (
    <div>
    <input checked={isChecked}  type="checkbox" onChange={(e) => setShowTaskDone(e.target.checked)}></input> <label>Tasks completed</label>
  <button onClick={handleDelete}>
    Clear
  </button>
  
  </div>
  )
}

export default VisibilityControl