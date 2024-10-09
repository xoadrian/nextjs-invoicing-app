import Container from '@/components/Container'
import StatusBadge from '@/components/StatusBadge'
import { db } from '@/db'
import { Invoices } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'

export default async function InvoicePage({ params }: { params: { invoiceId: string } }) {
  const invoiceId = parseInt((await params).invoiceId)

  if (isNaN(invoiceId)) {
    throw new Error('Invalid invoice ID')
  }

  const [result] = await db.select().from(Invoices).where(eq(Invoices.id, invoiceId)).limit(1)

  if (!result) {
    return notFound()
  }

  return (
    <main className="h-full my-12">
      <Container>
        <div className="flex justify-between mb-8">
          <h1 className="flex items-center gap-4 text-3xl font-semibold">
            Invoices {invoiceId}
            <StatusBadge status={result.status} />
          </h1>
          <p></p>
        </div>

        <p className="text-3xl mb-3">${(result.value / 100).toFixed(2)}</p>

        <p className="text-lg mb-8">{result.description}</p>

        <h2 className="font-bold text-lg mb-4">Billing Details</h2>

        <ul className="grid gap-2">
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice ID</strong>
            <span>{invoiceId}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice Date</strong>
            <span>{new Date(result.createTs).toLocaleDateString()}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Name</strong>
            <span>{result?.name}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Email</strong>
            <span>{result?.email}</span>
          </li>
        </ul>
      </Container>
    </main>
  )
}
