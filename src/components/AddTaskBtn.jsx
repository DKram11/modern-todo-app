import { plusMath } from "../assets/icons"

const AddTaskBtn = () => {
  return (
    <>
      <button className=" p-1 rounded-lg bg-white hover:shadow-blue-200 hover:ease-in hover:bg-blue-300">
        Add New Task
      </button>
      <img 
        src={plusMath} 
        width={23}
        alt="add"
        className="bg-white opacity-60" 
      />
    </>
  )
}

export default AddTaskBtn