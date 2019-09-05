import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class InteractiveList extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            id: 0,
            name: '',
            price: 0
        }
    }

    addGrocery = () => {
        const item = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price
        }
        this.props.add(item);
        this.setState({ id: this.state.id + 1 })
    }

    handleNameChange = (e) => this.setState({ name: e.target.value });

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) });


    render() {
    const { groceries, classes } = this.props;
      
        return (
            <Paper>
                <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Price"
                    className={classes.textField}
                    value={this.state.price}
                    onChange={this.handlePriceChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <Button className={classes.button} onClick={this.addGrocery}>Add Grocery Item</Button>
                </form>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" className={classes.title}>
                    Grocery List
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={true}>
                            {groceries.map(item => (
                            <ListItem>
                                <ListItemText
                                className={classes.groceryItem}
                                primary={item.name}
                                secondary={item.price ? item.price : 'Not in stock'}
                                />
                            </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Paper>
        )
    }
}