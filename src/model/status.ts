export type Status = 'open' | 'paid' | 'void' | 'uncollectible'

export const statusClassName: Record<Status, string> = {
  open: 'bg-blue-500',
  paid: 'bg-green-600',
  void: 'bg-zinc-700',
  uncollectible: 'bg-red-600',
}
