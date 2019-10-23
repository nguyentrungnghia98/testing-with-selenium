import { connect } from 'react-redux';
import Caro from './Caro';
import {
  clickSquare,
  changeTurn,
  updateWinnerUI,
  restartCaro,
  openWinnerModal
} from '../../actions/caro';

const mapStateToProps = state => {
  const { history, turn } = state.caro;
  const { isWinner, winnerSquares } = state.winner;
  const { moveStep, isIncrease } = state.step;
  return {
    history,
    moveStep,
    turn,
    isWinner,
    winnerSquares,
    isIncrease
  };
};

export default connect(
  mapStateToProps,
  {
    clickSquare,
    changeTurn,
    updateWinnerUI,
    restartCaro,
    openWinnerModal
  }
)(Caro);
