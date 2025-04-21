import { MenuItem } from "types/menu-item";
import { SquaresFour, ChartBar, GitBranch, ListChecks, GearSix } from "@phosphor-icons/react";
import { lazy } from "react";

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: SquaresFour,
    component: lazy(() => import('pages/Dashboard'))
  },
  {
    label: 'Performance',
    path: '/performance',
    icon: ChartBar,
    component: lazy(() => import('pages/Performance'))
  },
  {
    label: 'Workflow',
    path: '/workflow',
    icon: GitBranch,
    component: lazy(() => import('pages/Workflow'))
  },
  {
    label: 'Tasks',
    path: '/tasks',
    icon: ListChecks,
    component: lazy(() => import('pages/Tasks'))
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: GearSix,
    component: lazy(() => import('pages/Settings'))
  },
];
