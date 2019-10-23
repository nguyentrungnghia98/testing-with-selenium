import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
const CssTextField = withStyles({
  root: {
    '&': {
      marginBottom: '16px'
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        borderRadius: '4px',
        color: 'white'
      },
      '& fieldset': {
        borderColor: 'white'
      }
    },
    '& label': {
      color: 'white'
    }
  }
})(TextField);

export default CssTextField;
