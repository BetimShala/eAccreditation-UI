export interface Sidebar {
    path: string;
    title: string;
    icon: string;
    class: string;
    label: string;
    labelClass: string;
    roleId: number;
    children: Sidebar[];
}
