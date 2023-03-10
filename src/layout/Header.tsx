import React from "react"
import Button from "../components/Button"
import Search from "../components/Search"

export function Header(props: { data: any; setData: React.Dispatch<React.SetStateAction<any>> }) {
  const createTicket = () => {}
  const onSearch = () => {}
  return (
    <header className="bg-sky-600 p-2 text-white flex justify-between">
      <div className="flex items-center gap-2">
        <a href="#" className="relative px-3 py-1 rounded hover:bg-sky-800">
          <div className="logo w-20 h-6 opacity-100 cursor-pointer relative"></div>
        </a>
        <div className="px-3 py-1 rounded hover:bg-sky-800 cursor-pointer">Workspaces</div>
        <div className="px-3 py-1 rounded hover:bg-sky-800 cursor-pointer">Recent</div>
        <div className="px-3 py-1 rounded hover:bg-sky-800 cursor-pointer">Starred</div>
      </div>
      <div className="flex items-center gap-3">
        <Button onClick={createTicket}>Create</Button>
        <Search onSearch={onSearch} />
      </div>
    </header>
  )
}
