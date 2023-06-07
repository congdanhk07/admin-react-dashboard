import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import initialData from 'mock/data/dndData'
import Column from 'components/DND/Column'
import { DragDropContext } from 'react-beautiful-dnd'
const Dashboard = (props) => {
    const [state, setState] = useState(initialData)
    const columnOrder = state.columnOrder // lấy thứ tự cột
    const onDragEnd = (result) => {
        // draggableID : Item được kéo đi
        // source : Thông tin vị trí item bắt đầu kéo (item start)
        // destination: Thông tin vị trí item thả (item end)

        const { source, destination, draggableId } = result
        console.log('result', result)
        if (!destination) return // Nếu như kéo mà không thả -> trả item về chỗ cũ
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            // Nếu như vị trí , ID giống nhau --> không làm gì cả
            return
        }
        // lấy ra thông tin của cột vừa kéo
        const column = state.columns[source.droppableId]
        // clone 1 mảng : lấy danh sách ID các item trong cột
        // quy trình: Update trên mảng này và đưa mảng này vào
        const newTaskIds = [...column.taskIds]
        console.log('newTaskIds Before', newTaskIds)
        // Cắt mảng từ vị trí item start
        newTaskIds.splice(source.index, 1)
        // Từ vị trí item end - không cắt - add item start vào vị trí đó
        // Tạo ra được 1 mảng mới chứa thứ tự vị trí ID item vừa kéo thả
        newTaskIds.splice(destination.index, 0, draggableId)
        console.log('newTaskIds After', newTaskIds)
        // clone lại thông tin cột cũ , cập nhật thứ tự vị trí ID
        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        }
        console.log('newColumn', newColumn)
        // Đưa vào state mới
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn,
            },
        }
        console.log('newState', newState)
        setState(newState)
    }

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <div className="flex gap-2 justify-center">
                {columnOrder?.map((columnId) => {
                    const column = state.columns[columnId] // Lấy danh sách các cột
                    const taskList = column.taskIds.map(
                        (taskId) => state.tasks[taskId]
                    ) // Lấy danh sách các task đang thuộc 1 comlumn
                    console.log('column', column)
                    return (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={taskList}
                        />
                    )
                })}
            </div>
        </DragDropContext>
    )
}

Dashboard.propTypes = {}

export default Dashboard
