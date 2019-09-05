import { connect } from 'react-redux'
import ListComponent from '../../components/GroceryList'
import { withStyles } from '@material-ui/core/styles'
import { addGrocery } from '../../redux/actions'
import { green } from '@material-ui/core/colors';


const useStyles = withStyles(theme => ({
    root: {
      flex: '1 1 100%',
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    title: {
      margin: theme.spacing(2, 0, 2),
      fontWeight: '600',
      color: 'purple'
    },
    groceryItem: {
        color: 'blue'
    },
    button: {
      color: 'green',
      padding: '10px'
    }
  }));

export const List = connect(state => ({
  groceries: state.groceries.valueSeq()
}), {
    add: (grocery) => addGrocery(grocery)
})(useStyles(ListComponent))