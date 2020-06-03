import React from '../../../node_modules/react';
import Button from '../../../node_modules/@material-ui/core/Button';
import { Box } from '../../../node_modules/@material-ui/core';
import { ValidatorForm, TextValidator} from '../../../node_modules/react-material-ui-form-validator';
import useStyles from "../../MainCss";
 
class LoginForm extends React.Component {
 
    state = {
        user: {
            usuario: '',
            senha: ''
        },
    };
 
    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });

    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { user } = this.state;
        const classes = this.props.classes;
 
        return (
            <ValidatorForm
                onSubmit={this.handleSubmit}
            >
            <Box>
                <TextValidator 
                    name="usuario" 
                    label="Usuário" 
                    value={user.usuario} 
                    className={classes.w_100}
                    autoComplete="off"
                    onChange={this.handleChange}
                    validators={['required', 'minStringLength:5']}
                    errorMessages={['Campo obrigatório', 'Usuário incorreto']} 
                />
            </Box>
            <Box mt={3}>
                <TextValidator 
                    name="senha" 
                    label="Senha"
                    type="password" 
                    value={user.senha} 
                    className={classes.w_100} 
                    onChange={this.handleChange}
                    validators={['required', 'minStringLength:8']}
                    errorMessages={['Campo obrigatório', 'Senha incorreta']} 
                />
            </Box>
            <Box mt={5}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    className={classes.w_100}>
                    Entrar
                </Button>
            </Box>
            <Box mt={1}>
                <Button 
                    variant="outlined"
                    href="/createaccount"
                    className={classes.w_100}>
                    Criar uma conta
                </Button>
            </Box>
        </ValidatorForm>
        );
    }
}

export default () => {
    const classes = useStyles();
    return (
        <LoginForm classes={classes} />
    );
};