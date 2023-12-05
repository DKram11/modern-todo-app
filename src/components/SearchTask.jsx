import { search } from "../assets/icons"

const SearchTask = () => {
  return (
    <div className="flex flex-row py-1 px-1 bg-white border-slate-200 border-2 rounded-md">
      <input type="text" placeholder="Search" 
      className="font-poppins bg-white font-light w-full py-2 px-2 focus:outline-none" />

      <div className="bg-white m-auto pr-1">
        <img 
          src={search} 
          alt="search"
          width={25}
          height={26}
          className="flex items-center align-center bg-white"
        />
      </div>
      
    </div>
    
  )
}

export default SearchTask