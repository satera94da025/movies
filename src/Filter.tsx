import React, {ChangeEvent} from "react";

import {createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {yellow} from '@material-ui/core/colors';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',

        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '50ch',
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: yellow,

    },
});


type FilterType = {
    filter: string
    setFilter: (value: string) => void
}

export const Filter = (props: FilterType) => {
    const classes = useStyles();

    const movieFilter = (e: ChangeEvent<HTMLInputElement>) => props.setFilter(e.target.value)

    return (<form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>
                <TextField
                    color="secondary"
                    variant="filled"
                    className={classes.margin}
                    label="Search Film"
                    id="mui-theme-provider-standard-input"
                    value={props.filter} onChange={movieFilter}
                />
            </ThemeProvider>
        </form>
    )
}