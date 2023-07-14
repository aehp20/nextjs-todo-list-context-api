'use client'

import Link from 'next/link'

import Form from '../components/Form'

export default function AddPage() {
  return (
    <>
      <div>Add Todo</div>
      <Form />
      <div>
        <Link href="/">Go home</Link>
      </div>
    </>
  )
}
