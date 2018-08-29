// @flow

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingPage from './Loading';
import { getLocalStorage, getId } from '../actions/index';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

type State = {
  details: Object,
};

type Props = {
  Undo: Function,
  Details: Object,
  history: Object,
  BoolStorage: Object,
  HistoryArray: Array<Object>,
  getLocalStorage: Function,
  match: Function,
  getId: Function,
};

type DetailsType = {
  id: number,
  title: string,
  body: string,
};

const defaultDetails = {
  id: 0,
  title: 'TITLE',
  body: 'BODY',
};

class Details extends Component<Props, State> {
  props: Props;
  state: State = {
    details: defaultDetails,
  };

  static defaultProps = {
    id: 0,
    title: 'TITLE',
    body: 'BODY',
  }

  componentDidMount() {
    let bool = false;
    const matchId = parseInt(this.props.match.params.id)
    this.props.HistoryArray.find(x => {if(x.id === matchId) bool = true});
    if(bool) {
      this.props.getLocalStorage(true, matchId)
    } else {
      this.props.getId(matchId)
    }
  }

  Undo() {
    this.props.getLocalStorage(false, {})
    this.props.history.push(`/`);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.Details !== this.state.details) {
      this.setState({details: nextProps.Details})
    }
  }

  readLocalStorage(): ?Object {
    if(this.props.BoolStorage.bool) {
      return this.props.HistoryArray.find(x => x.id === this.props.BoolStorage.id);
    } else {
      return this.state.details
    }
  };

  render() {
    if(this.state.details || this.props.BoolStorage.bool) {
      const datas = [];
      datas.push(this.readLocalStorage());
      return (
        <div>
          <Button color='primary' style={{margin: '25px auto', display: 'block', fontSize: '3em', width: '500px'}} onClick={this.Undo.bind(this)}>Retour</Button>
            <div>
              <BootstrapTable  headerStyle={{ fontSize: '2em' }} bodyStyle={{fontSize: '2em'}} data={datas} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataSort dataAlign="center">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataAlign="center">title</TableHeaderColumn>
                <TableHeaderColumn dataField="body" dataAlign="center">body</TableHeaderColumn>
              </BootstrapTable>
            </div>
        </div>
      );
    } else {
      return(
        <div>
          <LoadingPage />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    Details: state.DetailsId,
    BoolStorage: state.BoolStorage,
    HistoryArray: state.HistoryTab
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLocalStorage, getId },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
