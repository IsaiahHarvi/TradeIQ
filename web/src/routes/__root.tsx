// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="bg-background text-foreground h-screen w-screen">
      {/* <Topbar /> */}
      <div className="flex pt-12 pl-14">
        {/* <Navbar /> */}
        <div className="flex justify-center w-full">
          <Outlet />
        </div>
        <TanStackRouterDevtools position="bottom-right" /> */
      </div>
      {/* <Toaster /> */}
    </div>
  ),
})
