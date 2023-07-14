'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Form from '../components/Form'
import { useTodoContext } from '../context/context'
import { TodoContextType, Todo } from '../interfaces'

export default function EditPage() {
  const searchParams = useSearchParams()
  const { todos } = useTodoContext() as TodoContextType
  const [todo, setTodo] = useState<Todo>()

  useEffect(() => {
    const id = searchParams.get('id') as string

    console.log('id', id)

    const foundTodo = todos.find((item) => item.id === id)
    if (foundTodo) {
      setTodo(foundTodo)
    }
  }, [todos, searchParams])

  return todo ? (
    <div>
      <div>Edit Todo</div>
      <Form todo={todo} />
      <div>
        <Link href="/">Go home</Link>
      </div>
    </div>
  ) : null
}
