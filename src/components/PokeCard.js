import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { typeHandler } from "./TypeHandler";
import { abilityHandler } from "./AbilityHandler";
import Stats from './Stats';
import './Styles.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ id, name, image, types, abilities, stats }) {
  const [expanded, setExpanded] = React.useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='card' >
    <div className='cardinterna'>
      <Card sx={{ maxWidth: 345 }}>
          <h3 style={{padding:2, margin:0}}>{capitalizeFirstLetter(name)}</h3>
          <h5 style={{padding:2, margin:0}}>{typeHandler(types)}</h5>
        <CardMedia
          style={{ backgroundColor: 'black', borderRadius: '5px' }}
          component="img"
          maxHeight="200"
          image={image}
          alt={name}
        />
        <CardContent style={{padding:2}}>
          <Typography variant="body2" color="text.secondary" style={{ height: 30 }}>
            Abilities: {abilityHandler(abilities)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{padding:0}}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit  >
          <CardContent style={{padding:5}}>
            <Stats stats={stats} />
          </CardContent>
        </Collapse>
      </Card>
    </div>
    </div>
  );
}