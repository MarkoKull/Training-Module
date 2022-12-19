export interface MenuItem {
  label: string;
  path: string | null;
  target?: '_blank' | '_self';
  children?: MenuItem[];
}

export interface MainNavigation {
  data: MenuItem[];
}
