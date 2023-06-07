import React from 'react'
import PropTypes from 'prop-types'
import TaskItem from '../TaskItem'
import { Draggable } from 'react-beautiful-dnd'
import navigationIcon from 'config/navigation-icon.config'

const TaskList = (props) => {
    const { tasks } = props
    return (
        <>
            {tasks?.map((task, index) => {
                const { id, content } = task
                return (
                    <Draggable key={id} draggableId={id} index={index}>
                        {(provided, snapshot) => {
                            return (
                                <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps} // element nào giữ properties dragHandleProps này thì element đó mới có thể cầm kéo (dragging)
                                    ref={provided.innerRef}
                                >
                                    <TaskItem content={content} />
                                </div>
                            )
                        }}
                    </Draggable>
                )
            })}
        </>
    )
}

TaskList.propTypes = {}

export default TaskList
