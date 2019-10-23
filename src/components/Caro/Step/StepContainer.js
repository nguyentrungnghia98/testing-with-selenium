import { connect } from 'react-redux';
import Step from '../Step/Step';
import { changeOrderStep } from '../../../actions/caro';

export default connect(
  null,
  {
    changeOrderStep
  },
  null,
  { forwardRef: true }
)(Step);
