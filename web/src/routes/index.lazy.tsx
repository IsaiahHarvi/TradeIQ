import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-2">
      TradeIQ Home Page
      <Button className="cursor-pointer">shad cn</Button>
      <ModeToggle />{' '}
    </div>
  )
}
