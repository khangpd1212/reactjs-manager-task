import { Draggable } from "react-beautiful-dnd"
import { Task } from "../../../common/data"

interface CardProps {
  [propName: string]: unknown
  task: Task
  index: number
}

const CardTicket = (props: CardProps) => {
  const { task, index } = props
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`mb-2 rounded shadow-md ${snapshot.isDragging ? "bg-white" : "bg-white"}`}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="h-52 w-full bg-cover bg-no-repeat bg-center rounded-t bg-[url('https://images.pexels.com/photos/9737563/pexels-photo-9737563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')]"></div>
          <div className="py-2 px-2 break-all text-gray-600 line-clamp-3 text-sm">
            {task.content}
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default CardTicket
