import Container from '@/components/Container'
import StatusBadge from '@/components/StatusBadge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { db } from '@/db'
import { Invoices } from '@/db/schema'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default async function Dashboard() {
  const results = await db.select().from(Invoices)

  return (
    <main className="h-full">
      <Container>
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-semibold">Invoices</h1>
          <p>
            <Button variant="ghost" className="inline-flex gap-2" asChild>
              <Link href="/invoices/new">
                <CirclePlus className="w-4 h-4" />
                Create Invoice
              </Link>
            </Button>
          </p>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] p-4">Date</TableHead>
              <TableHead className="p-4">Customer</TableHead>
              <TableHead className="p-4">Email</TableHead>
              <TableHead className="text-center p-4">Status</TableHead>
              <TableHead className="text-right p-4">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="p-0 font-medium text-left">
                  <Link href={`/invoices/${result.id}`} className="block p-4 font-semibold">
                    {new Date(result.createTs).toLocaleDateString()}
                  </Link>
                </TableCell>
                <TableCell className="p-0 text-left">
                  <Link href={`/invoices/${result.id}`} className="block font-semibold p-4">
                    asd
                  </Link>
                </TableCell>
                <TableCell className="p-0 text-left">
                  <Link href={`/invoices/${result.id}`} className="block p-4">
                    dsa
                  </Link>
                </TableCell>
                <TableCell className="p-0 text-center">
                  <Link href={`/invoices/${result.id}`} className="block p-4">
                    <StatusBadge status={result.status} />
                  </Link>
                </TableCell>
                <TableCell className="p-0 text-right">
                  <Link href={`/invoices/${result.id}`} className="block font-semibold p-4">
                    ${(result.value / 100).toFixed(2)}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </main>
  )
}
