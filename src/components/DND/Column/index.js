import React from 'react'
import PropTypes from 'prop-types'
import TaskList from '../TaskList'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TaskItem from '../TaskItem'

const Column = (props) => {
    const { column, tasks } = props
    return (
        <div className="w-[200px]  flex flex-col">
            <h1 className="text-xl py-3 px-4">{column?.title}</h1>
            <div>
                <Droppable droppableId={column?.id}>
                    {(provided, snapshot) => (
                        <div
                            className="flex-grow min-h-[100px]"
                            isDraggingOver={snapshot.isDraggingOver}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <TaskList tasks={tasks} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

Column.propTypes = {}

export default Column
{
}
