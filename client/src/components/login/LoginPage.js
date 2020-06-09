import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from "../../MainCss";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    const classes = useStyles();

    const handleSubmit = () => {
        // your submit logic
    }

    return (
        <Container maxWidth="sm" className={classes.mt_100}>
            <Card>
                <CardContent>
                    <Typography 
                        variant="h6"
                        component="h3"
                        align="center"
                        className={`${ classes.main_title } ${ classes.mb_25 }`}>
                        Desofuscador
                    </Typography>
                    
                    <Typography 
                        variant="h5" 
                        component="h2" 
                        align="center">
                        Iniciar sessão
                    </Typography>
                    
                    <LoginForm />
                </CardContent>
            </Card>
        </Container>
    );
}

export default LoginPage;