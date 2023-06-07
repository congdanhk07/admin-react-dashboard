import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = (props) => {
    const { content } = props
    return (
        <div
            className={`shadow-md hover:shadow-xl duration-200 bg-white p-4 rounded-xl border mt-3 cursor-pointer `}
        >
            {content}
        </div>
    )
}

TaskItem.propTypes = {}

export default TaskItem
