export interface Menu {
  label: string;
  pathname: string;
}

const MENU: Menu[] = [
  {
    label: 'Home',
    pathname: '/'
  },
  {
    label: 'Profile',
    pathname: '/profile'
  }
];
export default MENU;
