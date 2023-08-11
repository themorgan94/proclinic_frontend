import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ti-home',
    link: '/'
  },
  {
    id: 2,
    label: 'MENUITEMS.PATIENTS.TEXT',
    icon: 'ti-wheelchair',
    subItems: [
      {
        id: 21,
        label: 'MENUITEMS.PATIENTS.LIST.ADD_PATIENT',
        link: '/patients/add-patient',
        parentId: 2
      },
      {
        id: 22,
        label: 'MENUITEMS.PATIENTS.LIST.SEARCH_PATIENTS',
        link: '/patients',
        parentId: 2
      },
      {
        id: 23,
        label: 'MENUITEMS.PATIENTS.LIST.PATIENT_DETAILS',
        link: '/patients',
        parentId: 2
      },
      {
        id: 24,
        label: 'MENUITEMS.PATIENTS.LIST.EDIT_PATIENT',
        link: '/patients',
        parentId: 2
      },
    ]
  },
  {
    id: 3,
    label: 'MENUITEMS.DOCTORS.TEXT',
    icon: 'ti-user',
    subItems: [
      {
        id: 31,
        label: 'MENUITEMS.DOCTORS.LIST.ADD_DOCTOR',
        link: '/doctors/add-doctor',
        parentId: 3
      },
      {
        id: 32,
        label: 'MENUITEMS.DOCTORS.LIST.SEARCH_DOCTORS',
        link: '/doctors',
        parentId: 3
      },
      {
        id: 33,
        label: 'MENUITEMS.DOCTORS.LIST.DOCTOR_DETAILS',
        link: '/doctors',
        parentId: 3
      },
      {
        id: 34,
        label: 'MENUITEMS.DOCTORS.LIST.EDIT_DOCTOR',
        link: '/doctors',
        parentId: 3
      },
    ]
  },
  {
    id: 4,
    label: 'MENUITEMS.APPOINTMENTS.TEXT',
    icon: 'ti-pencil-alt',
    subItems: [
      {
        id: 41,
        label: 'MENUITEMS.APPOINTMENTS.LIST.ADD_APPOINTMENT',
        link: '/appointments/add-appointment',
        parentId: 4
      },
      {
        id: 42,
        label: 'MENUITEMS.APPOINTMENTS.LIST.SEARCH_APPOINTMENTS',
        link: '/appointments',
        parentId: 4
      },
      {
        id: 43,
        label: 'MENUITEMS.APPOINTMENTS.LIST.APPOINTMENT_DETAILS',
        link: '/appointments',
        parentId: 4
      },
      {
        id: 44,
        label: 'MENUITEMS.APPOINTMENTS.LIST.EDIT_APPOINTMENT',
        link: '/appointments',
        parentId: 4
      },
    ]
  },
  {
    id: 5,
    label: 'MENUITEMS.PAYMENTS.TEXT',
    icon: 'ti-money',
    subItems: [
      {
        id: 51,
        label: 'MENUITEMS.PAYMENTS.LIST.ADD_PAYMENT',
        link: '/payments/add-payment',
        parentId: 5
      },
      {
        id: 52,
        label: 'MENUITEMS.PAYMENTS.LIST.SEARCH_PAYMENTS',
        link: '/payments',
        parentId: 5
      },
      {
        id: 53,
        label: 'MENUITEMS.PAYMENTS.LIST.PAYMENT_DETAILS',
        link: '/payments',
        parentId: 5
      },
      {
        id: 54,
        label: 'MENUITEMS.PAYMENTS.LIST.EDIT_PAYMENT',
        link: '/payments',
        parentId: 5
      },
    ]
  },
  {
    id: 6,
    label: 'MENUITEMS.ROOM_ALLOTMENTS.TEXT',
    icon: 'ti-key',
    subItems: [
      {
        id: 61,
        label: 'MENUITEMS.ROOM_ALLOTMENTS.LIST.ADD_ROOM_ALLOTMENT',
        link: '/room-allotments/add-room-allotment',
        parentId: 6
      },
      {
        id: 62,
        label: 'MENUITEMS.ROOM_ALLOTMENTS.LIST.SEARCH_ROOM_ALLOTMENTS',
        link: '/room-allotments',
        parentId: 6
      },
      {
        id: 63,
        label: 'MENUITEMS.ROOM_ALLOTMENTS.LIST.ROOM_ALLOTMENT_DETAILS',
        link: '/room-allotments',
        parentId: 6
      },
      {
        id: 64,
        label: 'MENUITEMS.ROOM_ALLOTMENTS.LIST.EDIT_ROOM_ALLOTMENT',
        link: '/room-allotments',
        parentId: 6
      },
    ]
  },
  {
    id: 7,
    label: 'MENUITEMS.USERS.TEXT',
    icon: 'ti-key',
    subItems: [
      {
        id: 71,
        label: 'MENUITEMS.USERS.LIST.ADD_USER',
        link: '/users/add-user',
        parentId: 7
      },
      {
        id: 72,
        label: 'MENUITEMS.USERS.LIST.SEARCH_USERS',
        link: '/users',
        parentId: 7
      },
      {
        id: 73,
        label: 'MENUITEMS.USERS.LIST.USER_DETAILS',
        link: '/users',
        parentId: 7
      },
      {
        id: 74,
        label: 'MENUITEMS.USERS.LIST.EDIT_USER',
        link: '/users',
        parentId: 7
      },
    ]
  },
  {
    id: 8,
    label: 'MENUITEMS.MODULES.TEXT',
    icon: 'ti-key',
    subItems: [
      {
        id: 81,
        label: 'MENUITEMS.MODULES.LIST.ADD_MODULE',
        link: '/modules/add-module',
        parentId: 8
      },
      {
        id: 82,
        label: 'MENUITEMS.MODULES.LIST.SEARCH_MODULES',
        link: '/modules',
        parentId: 8
      },
      {
        id: 83,
        label: 'MENUITEMS.MODULES.LIST.MODULE_DETAILS',
        link: '/modules',
        parentId: 8
      },
      {
        id: 84,
        label: 'MENUITEMS.MODULES.LIST.EDIT_MODULE',
        link: '/modules',
        parentId: 8
      },
    ]
  },
  {
    id: 9,
    label: 'MENUITEMS.FEATURES.TEXT',
    icon: 'ti-key',
    subItems: [
      {
        id: 91,
        label: 'MENUITEMS.FEATURES.LIST.ADD_FEATURE',
        link: '/features/add-feature',
        parentId: 9
      },
      {
        id: 92,
        label: 'MENUITEMS.FEATURES.LIST.SEARCH_FEATURES',
        link: '/features',
        parentId: 9
      },
      {
        id: 93,
        label: 'MENUITEMS.FEATURES.LIST.FEATURE_DETAILS',
        link: '/features',
        parentId: 9
      },
      {
        id: 94,
        label: 'MENUITEMS.FEATURES.LIST.EDIT_FEATURE',
        link: '/features',
        parentId: 9
      },
    ]
  },
  {
    id: 10,
    label: 'MENUITEMS.TASKS.TEXT',
    icon: 'ti-key',
    subItems: [
      {
        id: 101,
        label: 'MENUITEMS.TASKS.LIST.ADD_TASK',
        link: '/tasks/add-task',
        parentId: 10
      },
      {
        id: 102,
        label: 'MENUITEMS.TASKS.LIST.SEARCH_TASKS',
        link: '/tasks',
        parentId: 10
      },
      {
        id: 103,
        label: 'MENUITEMS.TASKS.LIST.TASK_DETAILS',
        link: '/tasks',
        parentId: 10
      },
      {
        id: 104,
        label: 'MENUITEMS.TASKS.LIST.EDIT_TASK',
        link: '/tasks',
        parentId: 10
      },
    ]
  }
];
