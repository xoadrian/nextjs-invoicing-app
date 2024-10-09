import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Status, statusClassName } from '@/model/status'

export default function StatusBadge({ status }: { status: Status }) {
  return <Badge className={cn('rounded-full capitalize', statusClassName[status])}>{status}</Badge>
}
