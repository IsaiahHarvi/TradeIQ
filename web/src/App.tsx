import { ModeToggle } from './components/mode-toggle.tsx'
import { Button } from './components/ui/button.tsx'

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-2">
      <Button className="cursor-pointer">shad cn</Button>
      <ModeToggle />
    </div>
  )
}

export default App
