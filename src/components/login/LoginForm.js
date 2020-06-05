import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
 
export default class LoginForm extends React.Component {
 
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
 
        return (
            <ValidatorForm
                onSubmit={this.handleSubmit}
            >
            <Box>
                <TextValidator 
                    name="usuario" 
                    label="Usuário" 
                    value={user.usuario} 
                    autoComplete="off"
                    fullWidth
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
                    fullWidth
                    onChange={this.handleChange}
                    validators={['required', 'minStringLength:8']}
                    errorMessages={['Campo obrigatório', 'Senha incorreta']} 
                />
            </Box>
            <Box mt={5}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth
                    color="primary">
                    Entrar
                </Button>
            </Box>
            <Box mt={1}>
                <Button 
                    variant="outlined"
                    fullWidth
                    href="/createaccount">
                    Criar uma conta
                </Button>
            </Box>
        </ValidatorForm>
        );
    }
}