'use client'

import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useContext,
  useCallback,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import type { Todo, TodoForm, TodoContextType } from '../interfaces'

const TodoContext = createContext<TodoContextType | null>(null)

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'todo 1',
      description: 'description 1',
    },
    {
      id: '2',
      title: 'todo 2',
      description: 'description 2',
    },
  ])

  const save = useCallback(
    (todo: TodoForm) => {
      const newTodo = {
        id: uuidv4(),
        title: todo.title,
        description: todo.description,
      }

      setTodos([...todos, newTodo])
    },
    [todos, setTodos]
  )

  const update = useCallback(
    (todo: Todo) => {
      const updatedTodos = todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, ...todo }
        }

        return item
      })

      setTodos(updatedTodos)
    },
    [todos, setTodos]
  )

  const remove = useCallback(
    (id: string) => {
      const removedTodos = todos.filter((item) => item.id !== id)

      setTodos(removedTodos)
    },
    [todos, setTodos]
  )

  const value = useMemo(
    () => ({ todos, save, update, remove }),
    [todos, save, update, remove]
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoProvider

export const useTodoContext = () => useContext(TodoContext)
