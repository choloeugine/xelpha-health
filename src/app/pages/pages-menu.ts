import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ACCOUNT',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'RESTAURANT ITEMS',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'ROOMS',
        link: '/pages/ui-features/buttons',
      },
            
      {
        title: 'FAQS',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'FOOD MENU',
        link: '/pages/ui-features/popovers',
      },
      
      {
        title: 'SEARCH',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'CUSTOMER FEEDS',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'MESSAGING',
    icon: 'nb-compose',
    children: [
    
      {
        title: 'MESSAGING PANEL',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'INFORMATION',
    icon: 'nb-gear',
    children: [
      {
        title: 'Local information',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'OUR LOCATION',
    icon: 'nb-location',
    children: [
      
      {
        title: 'Google Map Location',
        link: '/pages/maps/leaflet',
      },
      
    ],
  },
  {
    title: 'ANALYSIS',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Sales',
        link: '/pages/charts/echarts',
      },
    ],
  },
  {
    title: 'MESSAGE EDITORS',
    icon: 'nb-title',
    children: [
      {
        title: 'Notepad',
        link: '/pages/editors/tinymce',
      },
      
    ],
  },
  
  
];
