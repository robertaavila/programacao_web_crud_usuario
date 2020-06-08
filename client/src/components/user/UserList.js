import React, { Component, forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@material-ui/icons/Delete';

import MainModal from '../modal/MainModal';
import UserForm from './UserForm';

class UserList extends Component {

  state = {
    modal: {
      open: false,
      showActions: true,
      title: '',
      description: '',
      body: '',
      handleConfirm: () => {}
    },
    data: this.props.data
  };

  componentDidMount() {
    let data = [];
    const base_url = process.env.REACT_APP_SERVER_URL;
    const get_url = base_url + "user/";

    const axios = require('axios');
    axios.get(get_url)
    .then((res) => {
        if(res.status === 200) {
          data = res.data.data;
        }
    })
    .catch((err) => {
      console.error(err);
    })
    .then((res) => {
      let state = this.state;
      state.data = data;
      this.setState(state);
    });
  }

  render() {
    const { modal, data } = this.state;

    const handleConfirmUserDelete = () => {
      this.setState( {
        modal: {
          open: false
        },
      });
    };

    const handleDeleteUser = (event, rowData) => {
      this.setState( {
        modal: {
          open: true,
          title: `Confirmar exclusão do usuário (${rowData.id})`,
          description: 'Você tem certeza de que deseja excluir este usuário?',
          showActions: true,
          body: '',
          handleConfirm: handleConfirmUserDelete
        }
      });
    }

    const handleConfirmEditUserCallback = () => {
      this.setState( { modal: { open: false } });
    }

    const handleEditUser = (event, rowData) => {
      this.setState( {
        modal: {
          open: true,
          title: `Editar usuário (${rowData.id})`,
          showActions: false,
          body: <UserForm
                  backButton={false}
                  userObject={rowData} 
                  isEdit={true} 
                  submitHandlerCallback={handleConfirmEditUserCallback} />
        },
      })
    }

    return (
      <div style={{ maxWidth: '100%' }}>
        <MainModal 
          open={modal.open}
          title={modal.title}
          description={modal.description}
          showActions={modal.showActions}
          handleConfirm={modal.handleConfirm}
          body={modal.body} />

        <MaterialTable
          icons={this.props.icons}
          title="Lista de usuários"
          columns={[
            { title: 'ID', field: 'idusuario', type: 'numeric' },
            { title: 'Nome', field: 'nome_proprio' },
            { title: 'Usuário', field: 'usuario' },
            { title: 'Senha', field: 'senha' }
          ]}
          data={data}
          localization={{
            pagination: {
                labelDisplayedRows: '{from}-{to} de {count}',
                labelRowsSelect: "linhas",
                labelRowsPerPage: "Linhas por página",
                firstAriaLabel: "Primeira página",
                firstTooltip: "Primeira página",
                previousAriaLabel: "Anterior",
                previousTooltip: "Anterior",
                nextAriaLabel: "Próximo",
                nextTooltip: "Próximo",
                lastAriaLabel: "Última página",
                lastTooltip: "Última página",
            },
            toolbar: {
                nRowsSelected: '{0} linha(s) selecionada(s)',
                searchTooltip: "Procurar",
                searchPlaceholder: "Procurar"
            },
            header: {
                actions: 'Ações'
            },
            body: {
                emptyDataSourceMessage: 'Nada encontrado',
                filterRow: {
                    filterTooltip: 'Filtrar'
                },
                addTooltip: "Adicionar",
                deleteTooltip: "Deletar",
                editTooltip: "Editar"
            }
        }}
        actions={[
          { tooltip: 'Editar', icon: () => <Edit color="primary" />, onClick: handleEditUser },
          { tooltip: 'Excluir', icon: () => <DeleteIcon color="error" />, onClick: handleDeleteUser }
        ]}
        />
      </div>
    )
  }
}

export default () => {
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    return (
      <UserList icons={tableIcons} />
    );
};