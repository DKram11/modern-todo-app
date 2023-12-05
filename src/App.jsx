import SearchTask from "./components/SearchTask"
import AddTask from "./components/AddTask"
import ListTask from "./components/ListTask"

const App = () => {
  return (
    <main className="relative m-10 flex flex-col min-h-screen border">
      <div className="items-center flex flex-col gap-[10px] m-10 border">
        <div className="w-[50%] p-1 rounded-lg bg-white shadow-md max-sm:w-[90%]">
          <SearchTask />
        </div>
        <div className="w-[50%] p-1 rounded-lg bg-white shadow-md max-sm:w-[90%]">
          <AddTask />
        </div>
        <div className="w-[50%] py-4 h-[500px] p-1 bg-white rounded-xl shadow-md max-sm:w-[90%]">
          <ListTask />
        </div>
      </div>
    </main>
  )
}

export default App