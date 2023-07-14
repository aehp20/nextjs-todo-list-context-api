export interface Todo {
  id: string
  title: string
  description: string
}

export interface TodoForm {
  title: string
  description: string
}

export interface TodoContextType {
  todos: Todo[]
  save: (todo: TodoForm) => void
  update: (todo: Todo) => void
  remove: (id: string) => void
}
