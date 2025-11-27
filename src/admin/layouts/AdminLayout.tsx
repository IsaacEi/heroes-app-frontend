import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-blue-300 w-screen h-screen p-8">
        <Outlet />
    </div>
  )
}
