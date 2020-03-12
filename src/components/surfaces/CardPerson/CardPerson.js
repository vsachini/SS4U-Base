import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditIcon from '@material-ui/icons/Edit';
import Phone from '@material-ui/icons/Phone';
import LocationOn from '@material-ui/icons/LocationOn';

import { Divider, Avatar, Grid, Card, CardActions, IconButton, CardContent } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: 5
  },
  profilePicture: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  dropdownMenu: {
    position: 'absolute',
    top: '15px',
    right: '15px'
  },
  icons: {
    height: '15px'
  }
}));

const CardPerson = ({ person, onEditClick, ...props }) => {

  const classes = useStyles();

  const onEdit = e => {
    e.preventDefault()
    onEditClick( person )
  }

  return (
    <Card className={ classes.root } { ...props } elevation={ 4 } >

      <Grid container alignItems="center" >
        <Grid item xs={ 12 }>
          <CardContent className={ classes.content }>
          
            <Avatar alt={ `${ person.name }'s picture`} className={ classes.profilePicture } src={ person.picture } />
            <div>
              <Typography color="textPrimary" gutterBottom>
                { person.name }
              </Typography>
              <Typography color="textSecondary">
                <LocationOn className={ classes.icons } /> { person.address ? `${ person.address.street } ${ person.address.postcode ? ` - ${ person.address.postcode }` : ''  }` : '' }
              </Typography>
              
              <Typography color="textSecondary">
                <Phone className={ classes.icons } /> { person.phone }
              </Typography>
            </div>
          </CardContent>
        </Grid>
      </Grid>

      <Divider light />
      <CardActions >
        <Grid container justify="flex-end" >
          { person.facebook &&
            <Grid item>
              <IconButton aria-label="Facebook" onClick={ () => window.open(`http://www.facebook.com/${ person.facebook }`, "_blank") }>
                <FacebookIcon />
              </IconButton>
            </Grid>
          }

          { person.instagram &&
            <Grid item>
              <IconButton aria-label="Instagram" onClick={ () => window.open(`http://www.instagram.com/${ person.instagram }`, "_blank") }>
                <InstagramIcon />
              </IconButton>
            </Grid>
          }

          { person.email &&
            <Grid item>
              <IconButton aria-label="Email" onClick={ () => window.open(`mailto:${ person.email }`) } >
                <MailOutlineIcon />
              </IconButton>
            </Grid>
          }

          <Grid item>
            <IconButton aria-label="Edit" onClick={ onEdit } >
              <EditIcon />
            </IconButton>
          </Grid>

        </Grid>
      </CardActions>
    </Card>
  );
}

export default CardPerson;