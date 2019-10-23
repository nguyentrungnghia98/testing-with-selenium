import { Theme, createStyles } from '@material-ui/core/styles';

export interface Style {
  topBar?: any;
  navItems?: any;
  navItem?: any;
  topBarContent?: any;
  navBarLogo?: any;
  active?: any;
}
const styles = (theme: Theme) =>
  createStyles({
    topBar: {
      position: 'relative',
      boxShadow: 'none',
      borderBottom: `1px solid ${theme.palette.grey['100']}`,
      backgroundColor: 'white'
    },
    topBarContent: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    navBarLogo: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      '& span': {
        fontSize: '20px',
        color: '#5a5a5a',
        marginLeft: '12px',
        fontWeight: '500'
      }
    },
    navItems: {
      display: 'flex'
    },
    navItem: {
      fontSize: '18px',
      textDecoration: 'none',
      marginLeft: '24px',
      color: '#6d6d6d',
      padding: '0 10px',
      cursor: 'pointer'
    },
    active: {
      color: '#52e0c5',
      borderBottom: '1px solid #52e0c5'
    }
  });

export default styles;
