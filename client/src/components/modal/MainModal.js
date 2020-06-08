import React from 'react';
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default class MainModal extends React.Component {
    state = {
        open: this.props.open ? this.props.open : false,
        title: this.props.title ? this.props.title : '',
        description: this.props.description ? this.props.description : '',
        body: this.props.body ? this.props.body : '',
        showActions: this.props.showActions ? this.props.showActions : true,
        cancelText: this.props.cancelText ? this.props.cancelText : 'Cancelar',
        confirmText: this.props.confirmText ? this.props.confirmText : 'Confirmar',
        handleConfirm: this.props.handleConfirm ? this.props.handleConfirm : () => {}
    };

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps)
            this.setState(nextProps);
    }

    render() {
        const state = this.state;

        const handleClickOpen = () => {
            this.setState( {
                open: true
            });
        };
    
        const handleClose = () => {
            this.setState( {
                open: false
            });
        };

        const handleConfirm = () => {
            this.setState( {
                open: false
            });
            state.handleConfirm();
        };

        return (
            <div>
                <Dialog 
                    open={state.open}
                    onClose={handleClose}
                    fullWidth={true}>
                    <DialogTitle>
                        <Typography 
                            align="center"
                            variant="h5"
                            component="h3"
                        >
                            {state.title}
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {state.description}
                        </DialogContentText>
                        {state.body}
                    </DialogContent>
                    { state.showActions ?(
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                {state.cancelText}
                            </Button>
                            <Button onClick={handleConfirm} color="primary">
                                {state.confirmText}
                            </Button>
                        </DialogActions>
                        ) : '' }
                </Dialog>
            </div>
        )
    }
}