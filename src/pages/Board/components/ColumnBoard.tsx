import { Droppable } from "react-beautiful-dnd"
import { Columns, Task } from "../../../common/data"
import Button from "../../../components/Button"
import CardTicket from "./CardTicket"
import HeaderBoard from "./HeaderBoard"

interface ColumnProps {
  column: Columns
  tasks: Task[]
}
function ColumnBoard(props: ColumnProps) {
  const { column, tasks } = props
  return (
    <div className="flex flex-col justify-between bg-slate-200 rounded py-2 px-3 w-80">
      <HeaderBoard title={column.title} />
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="overflow-y-auto min-h-min max-h-[75vh] no-scrollbar"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((item, index) => (
              <CardTicket task={item} index={index} key={item.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button type="text" addClassName="flex items-center w-full mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        Add another card
      </Button>
    </div>
  )
}

export default ColumnBoard
