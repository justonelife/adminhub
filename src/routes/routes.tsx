import { Loading } from "components/Loading";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import('pages/Dashboard'));
const Performance = lazy(() => import('pages/Performance'));
const Settings = lazy(() => import('pages/Settings'));
const Tasks = lazy(() => import('pages/Tasks'));
const Workflow = lazy(() => import('pages/Workflow'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/dashboard' element={
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      }>
      </Route>
      <Route path='/performance' element={
        <Suspense fallback={<Loading />}>
          <Performance />
        </Suspense>
      }>
      </Route>
      <Route path='/Settings' element={
        <Suspense fallback={<Loading />}>
          <Settings />
        </Suspense>
      }>
      </Route>
      <Route path='/tasks' element={
        <Suspense fallback={<Loading />}>
          <Tasks />
        </Suspense>
      }>
      </Route>
      <Route path='/workflow' element={
        <Suspense fallback={<Loading />}>
          <Workflow />
        </Suspense>
      }>
      </Route>
    </Routes>
  );
}
