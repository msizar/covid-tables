import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import styles from './styles';


export default function ProfileCard(props) {
  const { user } = props;
  const classes = styles();
  if(!user){
    return (
      <Card
        className={classes.card}
        data-aos="fade-up"
        data-aos-offset={90}
        data-aos-delay={40}
        data-aos-duration={1000}
        data-aos-anchor-placement="top-bottom"
      >
          <Typography variant="subtitle1" color="textSecondary">
            No user
          </Typography>

      </Card>
    )
  }
  
  return (
    <Card
      className={classes.card}
      data-aos="fade-up"
      data-aos-offset={90}
      data-aos-delay={40}
      data-aos-duration={1000}
      data-aos-anchor-placement="top-bottom"
    >
      
     { user.image? <CardMedia
        className={classes.cover}
        image={user.image}
        title="Live from space album cover"
      />: <Typography >no image</Typography>}

      <div className={classes.details}>
        <CardContent className={classes.content}>
          
          <Typography component="h5" variant="h5">
            {user.name}
          </Typography>]

          <Typography variant="subtitle1" color="textSecondary">
            {user.homeworld}
          </Typography>

        </CardContent>
      </div>

    </Card>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    homeworld: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
