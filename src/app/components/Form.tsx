'use client'

import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { useTodoContext } from '../context/context'
import { TodoContextType, TodoForm, Todo } from '../interfaces'

export default function Form({ todo }: { todo?: Todo }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoForm>()
  const { save, update } = useTodoContext() as TodoContextType
  const buttonLabel = todo?.id ? 'Edit' : 'Add'

  const onSubmit: SubmitHandler<TodoForm> = (data: TodoForm) => {
    console.log(data)
    if (todo?.id) {
      const ediTodo: Todo = { id: todo.id, ...data }
      update(ediTodo)
    } else {
      save(data)
    }
    router.push('/')
  }

  useEffect(() => {
    if (todo?.id) {
      reset({
        title: todo.title,
        description: todo.description,
      })
    }
  }, [reset, todo])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          defaultValue=""
          {...register('title', { required: true })}
        />
        {errors.title && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" defaultValue="" {...register('description')} />
      </div>
      <button type="submit">{buttonLabel}</button>
    </form>
  )
}
