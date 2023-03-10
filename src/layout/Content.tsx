import { InitData } from "../common/data"
import Board from "../pages/Board"

function Content(props: {
  data: InitData
  setData: React.Dispatch<React.SetStateAction<InitData>>
}) {
  return (
    <div className="p-4 bg-gradient-to-br from-sky-500 to-purple-500 min-h-[93.4vh]">
      <div className="flex gap-2">
        <Board data={props.data} setData={props.setData} />
      </div>
    </div>
  )
}

export default Content
