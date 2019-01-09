import { Sidebar } from '../../../models/sidebar.model'

export const SIDEBARS: Sidebar[] = [
  {
    path: '/',
    title: 'Home',
    icon: 'fa fa-home',
    class: '',
    label: '',
    labelClass: '',
    roleId: 1,
    children: null
  },
  {
    path: '/user',
    title: 'Users',
    icon: 'fa fa-users',
    class: '',
    label: '',
    labelClass: '',
    roleId: 1,
    children: [
      {
        path: '/user/list',
        title: 'User List',
        icon: 'fa fa-circle-o',
        class: '',
        label: '',
        labelClass: '',
        roleId: 1,
        children: null
      },
      {
        path: '/user/create',
        title: 'Create User',
        icon: 'fa fa-circle-o',
        class: '',
        label: '',
        labelClass: '',
        roleId: 1,
        children: null
      },
    ]
  },
  {
    path: '/unit',
    title: 'Products',
    icon: 'mdi mdi-arrange-bring-to-front',
    class: '',
    label: '',
    labelClass: '',
    roleId: 1,
    children: [
      {
        path: '/unit/add',
        title: 'Create Product',
        icon: 'fa fa-circle-o',
        class: '',
        label: '',
        labelClass: '',
        roleId: 1,
        children: null
      },
      {
        path: '/unit/list',
        title: 'Product List',
        icon: 'fa fa-circle-o',
        class: '',
        label: '',
        labelClass: '',
        roleId: 1,
        children: null
      }
    ]
  },
  {
    path: '/deal',
    title: 'Deals',
    icon: 'mdi mdi-arrange-bring-to-front',
    class: '',
    label: '',
    labelClass: '',
    roleId: 1,
    children: null
  },
  {
    path: '/period',
    title: 'Period',
    icon: 'mdi mdi-arrange-bring-to-front',
    class: '',
    label: '',
    labelClass: '',
    roleId: 1,
    children: null
  }
]