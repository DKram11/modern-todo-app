import { plusIcon } from "../assets/icons"

const AddTask = () => {
  return (
    <>
    <button className="bg-white rounded-md py-2 px-4 font-poppins">
      Add New Task
    </button>
    
    <img 
      src={plusIcon} 
      alt="Add New Task" 
      width={25}
      height={30}

    />
    </>
  )
}

export default AddTask