import { DragDropContext, type DropResult } from "react-beautiful-dnd"
import { type InitData } from "../../common/data"
import ColumnBoard from "./components/ColumnBoard"

function Board(props: { data: InitData; setData: React.Dispatch<React.SetStateAction<InitData>> }) {
  const { data, setData } = props

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result
    console.log(result)
    if (destination == null) {
      return
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    const start = data.columns[source.droppableId]
    console.log("🚀 ~ file: index.tsx:30 ~ onDragEnd ~ start:", start)
    const finish = data.columns[destination.droppableId]
    console.log("🚀 ~ file: index.tsx:32 ~ onDragEnd ~ finish:", finish)

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      }
      setData(newState)
      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    setData(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId]
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId])
        return <ColumnBoard key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

export default Board
