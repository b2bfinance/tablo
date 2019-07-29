import {
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import { SET_FILTER } from "../constants";
import { EmbedContext } from "../EmbedWrapper";
import { addChoiceToChosen } from "../utils/filter";

const useStyles = makeStyles(theme => ({
  filterWrapperHeader: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  filterWrapperHeaderTitle: {
    marginRight: theme.spacing(2)
  },
  filterWrapperListIcon: {
    minWidth: theme.spacing(5)
  }
}));

export default ({ group, multi, title, choices, chosen, onClose }) => {
  const classes = useStyles();

  const {
    filters: [filters, dispatchFilterAction]
  } = useContext(EmbedContext);

  const handleSetChosen = choice => () => {
    dispatchFilterAction({
      type: SET_FILTER,
      group: group,
      chosen: addChoiceToChosen(chosen, multi, choice)
    });
  };

  return (
    <React.Fragment>
      <Grid className={classes.filterWrapperHeader} container alignItems="center" justify="space-between">
        <Grid item>
          <Typography className={classes.filterWrapperHeaderTitle} variant="subtitle1">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton color="inherit" size="small" onClick={onClose} aria-label={`Close ${title} filter selection`}>
            <Close />
          </IconButton>
        </Grid>
      </Grid>
      <List>
        {choices.map(choice => (
          <ListItem key={choice.value} button onClick={handleSetChosen(choice.value)}>
            <ListItemIcon className={classes.filterWrapperListIcon}>
              {multi ? (
                <Checkbox edge="start" checked={chosen.indexOf(choice.value) !== -1} tabIndex={-1} disableRipple />
              ) : (
                <Radio edge="start" checked={chosen === choice.value} tabIndex={-1} disableRipple />
              )}
            </ListItemIcon>
            <ListItemText primary={choice.label} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};
