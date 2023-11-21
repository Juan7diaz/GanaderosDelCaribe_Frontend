import {
  ClipboardDocumentCheckIcon,
  UsersIcon,
  TableCellsIcon,
  CubeTransparentIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
// https://heroicons.com/

export const sidebarItemsADMIN = [
  {
   title: "Registro Animal",
   path: "/dashboard/animal-registration",
   active: "animal-registration",
   icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Estado Animal",
    path: "/dashboard/status-animal",
    active: "status-animal",
    icon: CheckBadgeIcon,
  },
  {
    title: "Empleados",
    path: "/dashboard/employee-registration",
    active: "employee-registration",
    icon: UsersIcon,
  },
  {
    title: "Registro de actividad",
    path: "/dashboard/activity-register",
    active: "activity-register",
    icon: TableCellsIcon,
  },
  {
    title: "Control de Inventario",
    path: "/dashboard/inventory-control",
    active: "inventory-control",
    icon: CubeTransparentIcon,
  },
];

export const sidebarItemsUSER = [
  {
    title: "Registro Animal",
    path: "/dashboard/animal-registration",
    active: "animal-registration",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Registro de actividad",
    path: "/dashboard/activity-register",
    active: "activity-register",
    icon: TableCellsIcon,
  },
  {
    title: "Control de Inventario",
    path: "/dashboard/inventory-control",
    active: "inventory-control",
    icon: CubeTransparentIcon,
  },
]

