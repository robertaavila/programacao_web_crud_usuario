import React from '../../../node_modules/react';
import { Container } from '../../../node_modules/@material-ui/core';
import Typography from '../../../node_modules/@material-ui/core/Typography';
import Card from '../../../node_modules/@material-ui/core/Card';
import CardContent from '../../../node_modules/@material-ui/core/CardContent';
import useStyles from "../../MainCss";
import UserForm from "./UserForm";

const NewUserPage = () => {
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
                        Criar a sua conta
                    </Typography>

                    <UserForm />
                </CardContent>
            </Card>
        </Container>
    );
}

export default NewUserPage;