import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { closeAlert } from '../../actions/alert';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@material-ui/core';
import './Alert.scss';

const Alert = (props: any) => {
  const { isOpen, closeAlert, handleClick, type, message } = props;
  return (
    <Dialog open={isOpen} className="modal">
      <button type="button" className="btn btn--close" onClick={closeAlert}>
        <div>x</div>
      </button>
      <DialogContent className="card">
        {type === 'success' && (
          <Fragment>
            <h3>You have successfully registered!</h3>
            <button onClick={handleClick} className="btn btn--action">
              Go to login
            </button>
          </Fragment>
        )}
        {type === 'error' && (
          <Fragment>
            <h3>{message}</h3>
            <button onClick={closeAlert} className="btn btn--error">
              Close
            </button>
          </Fragment>
        )}
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state: State) => {
  return {
    isOpen: state.alert.isOpen,
    type: state.alert.type,
    message: state.alert.message,
    handleClick: state.alert.handleClick
  };
};

export default connect(
  mapStateToProps,
  {
    closeAlert
  }
)(Alert);
