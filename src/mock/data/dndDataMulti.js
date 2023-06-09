export const initialData = {
    // Data các tổng các task xuất hiện
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    // cột chứa các task
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            //1. thể hiện các task này đang chứa trong column-1
            //2. Thể hiện vị trí của các task sau này
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Doing',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: [],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],
}
export default initialData
