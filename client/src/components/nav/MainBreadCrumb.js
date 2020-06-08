import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import useStyles from '../../MainCss';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function MainBreadCrumb() {
    const classes = useStyles();

    return (
        <Breadcrumbs className={classes.main_breadcrumb}>
        <Link>
            Admin
        </Link>
        <Typography color="textPrimary">
            Lista de usuários
        </Typography>
        </Breadcrumbs>
    );
}
