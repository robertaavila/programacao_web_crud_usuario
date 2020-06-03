import React from '../../../node_modules/react';
import Button from '../../../node_modules/@material-ui/core/Button';
import { Box } from '../../../node_modules/@material-ui/core';
import { ValidatorForm, TextValidator} from '../../../node_modules/react-material-ui-form-validator';
import useStyles from "../../MainCss";
 
class UserForm extends React.Component {
 
    state = {
        user: {
            nome_proprio: '',
            usuario: '',
            senha: '',
            repetirSenha: '',
        },
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
                        name="nome_proprio"
                        label="Nome próprio" 
                        autoComplete="off"
                        value={user.nome_proprio} 
                        onChange={this.handleChange}
                        className={classes.w_100} 
                        validators={['required']}
                        errorMessages={['Campo obrigatório']}
                    />
                </Box>
                <Box mt={3}>
                    <TextValidator 
                        name="usuario"
                        label="Usuário" 
                        autoComplete="off"
                        value={user.usuario} 
                        onChange={this.handleChange}
                        className={classes.w_100} 
                        validators={['required', 'minStringLength:5']}
                        errorMessages={['Campo obrigatório', 'Seu usuário de login deve conter no mínimo 5 caracteres']}
                    />
                </Box>
                <Box mt={3}>
                    <TextValidator
                        type="password"
                        name="senha"
                        label="Senha"
                        value={user.senha}
                        onChange={this.handleChange}
                        className={classes.w_100} 
                        validators={['required', 'minStringLength:8']}
                        errorMessages={['Campo obrigatório', 'A senha é muito fraca']}
                    />
                </Box>
                <Box mt={3}>
                    <TextValidator
                        type="password"
                        name="repetirSenha"
                        label="Confirmar senha"
                        value={user.repetirSenha}
                        onChange={this.handleChange}
                        className={classes.w_100} 
                        validators={['required', 'isPasswordMatch']}
                        errorMessages={['Campo obrigatório', 'As senhas não correspondem']}
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
        );
    }
}

export default () => {
    const classes = useStyles();
    return (
        <UserForm classes={classes} />
    );
};