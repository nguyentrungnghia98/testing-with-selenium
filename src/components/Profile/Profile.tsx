import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers/index';
import User from '../../apis/user';
import { fetchUser } from '../../actions/user';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Profile.scss';
import Topbar from '../Topbar/Topbar';
import {
  Container,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

const Profile: React.FC = (props: any) => {
  const { user, fetchUser } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataUser = async (): Promise<void> => {
      try {
        setLoading(true);
        const userToken = localStorage.getItem('userToken');
        const response = await User.get('/user/me', {
          headers: { Authorization: userToken }
        });
        console.log('res', response);
        fetchUser(response.data);
      } catch (err) {
        console.log('err', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDataUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Topbar />
      <div className="profile">
        <Paper className="profile--wrapper">
          {loading ? (
            <CircularProgress size={30} />
          ) : (
            <Card className="profile--content">
              <CardMedia
                component="img"
                height="200"
                alt="User avatar"
                className="profile--avatar"
                image="https://i.imgur.com/6RUJRyM.png"
                title="User avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {user ? user.name : ''}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user ? user.email : ''}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Paper>
      </div>
    </Fragment>
  );
};

const mapStateToProp = (state: State) => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProp,
  {
    fetchUser
  }
)(Profile);
