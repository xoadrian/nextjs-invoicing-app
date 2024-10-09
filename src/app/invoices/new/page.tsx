'use client'

import { createAction } from '@/app/actions'
import Container from '@/components/Container'
import SubmitButton from '@/components/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Form from 'next/form'

export default function InvoicesNew() {
  return (
    <main className="h-full">
      <Container>
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-semibold">Create Invoice</h1>
        </div>

        <Form action={createAction} className="grid gap-4 max-w-xs">
          <div>
            <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
              Billing Name
            </Label>
            <Input id="name" type="text" name="name" />
          </div>
          <div>
            <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
              Billing Email
            </Label>
            <Input id="email" type="text" name="email" />
          </div>
          <div>
            <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
              Value
            </Label>
            <Input id="value" type="text" name="value" />
          </div>
          <div>
            <Label htmlFor="description" className="block mb-2 font-semibold text-sm">
              Description
            </Label>
            <Textarea id="description" name="description" />
          </div>
          <div>
            <SubmitButton>Submit</SubmitButton>
          </div>
        </Form>
      </Container>
    </main>
  )
}
