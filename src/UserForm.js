import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Button, TextField, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles({
    w_100: {
        width: "100%"
    },
    mt_100: {
        marginTop: "100px"
    },
    mb_25: {
        marginBottom: "25px"
    },
    flex_center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    main_title: {
        color: "#3f51b5",
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontWeight: 700
    }
  });

const UserForm = () => {
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

                    <ValidatorForm 
                        fullWidth={true}
                        onSubmit={handleSubmit}
                        onError={errors => console.log(errors)}>
                        <Box>
                            <TextValidator 
                                id="nome_proprio" 
                                autoComplete="off" 
                                label="Nome próprio"
                                className={classes.w_100} 
                                validators={['required']}
                                errorMessages={['Campo obrigatório']}
                            />
                        </Box>
                        <Box mt={3}>
                            <TextField 
                                id="usuario"
                                autoComplete="off" 
                                label="Usuário" 
                                validators={['required']}
                                errorMessages={['Campo obrigatório']}
                                className={classes.w_100} 
                            />
                        </Box>
                        <Box mt={3}>
                            <TextField 
                                type="password" 
                                id="senha" 
                                label="Senha"
                                validators={['required', 'minStringLength:8']}
                                errorMessages={['Campo obrigatório', 'Sua senha deve conter no mínimo 8 caracteres']} 
                                autoComplete="off" 
                                className={classes.w_100} 
                            />
                        </Box>
                        <Box mt={3}>
                            <TextField 
                                type="password" 
                                id="confirma_senha" 
                                label="Confirme sua senha" 
                                validators={['required', 'minStringLength:8']}
                                errorMessages={['Campo obrigatório', 'Sua senha deve conter no mínimo 8 caracteres']} 
                                autoComplete="off" 
                                className={classes.w_100} 
                            />
                        </Box>
                        <Box mt={5}>
                            <Button 
                                type="submit"
                                variant="contained" 
                                color="primary" 
                                className={classes.w_100}>
                                Confirmar
                            </Button>
                        </Box>
                        <Box mt={1}>
                            <Button 
                                variant="outlined" 
                                href="/login" 
                                className={classes.w_100}>
                                Voltar
                            </Button>
                        </Box>
                    </ValidatorForm>
                </CardContent>
            </Card>
        </Container>
    );
}

export default UserForm;