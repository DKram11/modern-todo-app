import { search } from "../assets/icons"

const SearchTask = () => {
  return (

    <div className="flex bg-white border-2 rounded-md">
      <input type="text" placeholder="Search Task" 
      className="font-poppins bg-white font-medium text-xl w-full py-2 px-2 focus:outline-none" />
        <div className="bg-white m-auto pr-1">
          <img 
            src={search} 
            alt="search"
            width={25}
            height={26}
            className="flex items-center align-center bg-white z-10"
          />
        </div>
    </div>
  )
}

export default SearchTask