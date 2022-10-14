export interface todo {
    id: number
    title: string
    completed: boolean
}

export interface todoFormProps {
    onButton: (title: string) => void
}

export interface todoListProps {
    todos: todo[]
    onRemove: (id: number) => void
    onCheck: (id: number) => void
}