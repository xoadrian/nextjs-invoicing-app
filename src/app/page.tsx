import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoicipedia</h1>
      <p>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <Button asChild>
          <Link href="/dashboard">Sign in</Link>
        </Button>
      </p>
    </main>
  )
}
