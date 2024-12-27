import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import Loader from '@/components/loader'
const Dashboard = lazy(() => import('@/pages/dashboard'))
export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}
