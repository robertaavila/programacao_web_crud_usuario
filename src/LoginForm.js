import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Button, TextField, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

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

const LoginForm = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.mt_100}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="h3" align="center" className={`${ classes.main_title } ${ classes.mb_25 }`}>
                        Desofuscador
                    </Typography>
                    <Typography variant="h5" component="h2" align="center">
                        Iniciar sessão
                    </Typography>
                    <FormControl fullWidth={true}>
                        <Box>
                            <TextField id="usuario" autoComplete="off" label="Usuário" className={classes.w_100} />
                        </Box>
                        <Box mt={3}>
                            <TextField type="password" id="senha" label="Senha" autoComplete="current-password" className={classes.w_100} />
                        </Box>
                
                        <Box mt={5}>
                            <Button type="submit" variant="contained" color="primary" className={classes.w_100}>
                                Entrar
                            </Button>
                        </Box>
                        <Box mt={1}>
                            <Button variant="outlined" href="/createaccount" className={classes.w_100}>
                                Criar uma conta
                            </Button>
                        </Box>
                    </FormControl>
                </CardContent>
            </Card>
        </Container>
    );
}

export default LoginForm;