import { Icon } from "@phosphor-icons/react";
import { ComponentType, LazyExoticComponent } from "react";

export interface MenuItem {
  label: string;
  path: string;
  icon?: Icon;
  component: LazyExoticComponent<ComponentType>;
}
