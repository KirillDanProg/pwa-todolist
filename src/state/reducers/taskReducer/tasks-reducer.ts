export type TasksInitialStateType = {
    [key: string]: TaskType[]
}
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

const initialState = {}

export const tasksReducer = (state: TasksInitialStateType = initialState, action: TaskActionsType): TasksInitialStateType => {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                [action.todolistId]: [...action.tasks]
            }
        case ADD_TASK:
            return {
                [action.todolistId]: [{...action.task}, ...state[action.todolistId]]
            }
        case DELETE_TASK:
            return {
                [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId)
            }
        default:
            return state
    }
}
// Actions types
type TaskActionsType = ReturnType<typeof fetchTasksAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof deleteTaskAC>

// actions variables
const FETCH_TASKS = "FETCH-TASKS"
const ADD_TASK = "ADD-TASK"
const DELETE_TASK = "DELETE-TASK"

// action creators
export const fetchTasksAC = (todolistId: string, tasks: TaskType[]) => {
    return {
        type: FETCH_TASKS,
        todolistId,
        tasks
    } as const
}

export const addTaskAC = (todolistId: string, task: TaskType) => {
    return {
        type: ADD_TASK,
        task,
        todolistId
    } as const
}

export const deleteTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    } as const
}