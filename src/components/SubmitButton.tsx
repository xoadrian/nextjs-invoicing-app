'use client'

import React, { ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { LoaderCircle } from 'lucide-react'

export default function SubmitButton({ children, ...props }: ComponentProps<typeof Button>) {
  const { pending } = useFormStatus()
  console.log(pending)

  return (
    <Button className="w-full font-semibold relative" disabled={pending} {...props}>
      <span className={pending ? 'text-transparent' : ''}>{children}</span>
      {pending && (
        <span className="absolute flex items-center justify-center w-full h-full">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  )
}
