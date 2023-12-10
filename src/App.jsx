import SearchTask from "./components/SearchTask"
import ListTask from "./components/ListTask"

const App = () => {
  return (
    <main className="relative m-10 flex flex-col min-h-screen">
      <div className="items-center flex flex-col gap-[10px] m-10 border">
        
        <div className="p-2 -mb-2 w-[40%] responsive">
          <h1 className="font-poppins opacity-70 font-extrabold text-[25px]">TODO APP</h1>
        </div>
        <div className="w-[40%] p-1 rounded-lg bg-white shadow-md responsive">
          <SearchTask />
        </div>
        <button className="w-[40%] shadow-md justify-center responsive items-center flex responsive rounded-lg bg-white hover:shadow-blue-200 hover:ease-in hover:transition hover:bg-blue-300  hover:text-white font-poppins text-xl py-3 text-slate-400">
          Add New Task
        </button>   
        <div className="w-[40%] py- h-[500px] p-1 bg-white rounded-xl shadow-md max-sm:w-[90%] responsive">
          <ListTask />
        </div>
      </div>
    </main>
  )
}

export default App