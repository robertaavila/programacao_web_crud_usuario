import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { ValidatorForm, TextValidator} from '../../../node_modules/react-material-ui-form-validator';
 
export default class UserForm extends React.Component {
    state = {
        user: (this.props.userObject ? {
            nome_proprio: this.props.userObject.nome_proprio,
            usuario: this.props.userObject.usuario,
            senha: this.props.userObject.senha,
            repetirSenha: this.props.userObject.senha,
        } : {
            nome_proprio: '',
            usuario: '',
            senha: '',
            repetirSenha: '',
        }),
        backButton: this.props.backButton,
        isEdit: this.props.isEdit ? this.props.isEdit : false,
        submitHandlerCallback: this.props.submitHandlerCallback ? this.props.submitHandlerCallback : () => {}
    };
 

    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.senha) {
                return false;
            }
            return true;
        });
    }
 
    componentWillUnmount() {
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }
 
    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });

    }
 
    handleSubmit = () => {
        const { submitHandlerCallback } = this.state;
        submitHandlerCallback();
    }
 
    render() {
        const { user, backButton, isEdit } = this.state;
 
        return (
            <ValidatorForm
                onSubmit={this.handleSubmit}
            >
                 <Box>
                    <TextValidator 
                        name="nome_proprio"
                        label="Nome próprio" 
                        autoComplete="off"
                        fullWidth
                        value={user.nome_proprio} 
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['Campo obrigatório']}
                    />
                </Box>
                <Box mt={3}>
                    <TextValidator 
                        name="usuario"
                        label="Usuário" 
                        autoComplete="off"
                        fullWidth
                        value={user.usuario} 
                        onChange={this.handleChange} 
                        validators={['required', 'minStringLength:5']}
                        errorMessages={['Campo obrigatório', 'Seu usuário de login deve conter no mínimo 5 caracteres']}
                    />
                </Box>
                <Box mt={3}>
                    <TextValidator
                        type="password"
                        name="senha"
                        label="Senha"
                        fullWidth
                        value={user.senha}
                        onChange={this.handleChange}
                        validators={['required', 'minStringLength:8']}
                        errorMessages={['Campo obrigatório', 'A senha é muito fraca']}
                    />
                </Box>
                <Box mt={3}>
                    <TextValidator
                        type="password"
                        name="repetirSenha"
                        label="Confirmar senha"
                        fullWidth
                        value={user.repetirSenha}
                        onChange={this.handleChange}
                        validators={['required', 'isPasswordMatch']}
                        errorMessages={['Campo obrigatório', 'As senhas não correspondem']}
                    />
                </Box>
                <Box mt={5}>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        fullWidth>
                        { isEdit ? "Salvar" : "Confirmar" }
                    </Button>
                </Box>
                { backButton ? (
                    <Box mt={1}>
                        <Button 
                            variant="outlined" 
                            href="/login"
                            fullWidth>
                            Voltar
                        </Button>
                    </Box>
                ) : '' }
            </ValidatorForm>
        );
    }
}