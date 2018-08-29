// @flow

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

type Props = {
  historyTab: Array<Object>,
  history: Object,
};

class HistoryDisplay extends Component<Props> {
  props: Props;

  Undo = () => {
    this.props.history.push(`/`)
  }

  render() {

    const options = {
      dataTotalSize: 230  // Showing 30 for the size per page as default
    };

    return (
      <Fragment>
        <Button color='primary' style={{margin: '25px auto', display: 'block', fontSize: '3em', width: '500px'}} onClick={this.Undo.bind(this)}>Retour</Button>
          <div>
            <BootstrapTable bodyStyle={{fontSize: '2em'}} headerStyle={{ fontSize: '2em' }} data={this.props.historyTab} striped={true} hover={true}>
              <TableHeaderColumn dataField="id" isKey={true} dataSort dataAlign="center">ID</TableHeaderColumn>
              <TableHeaderColumn dataField="mail" dataAlign="center">mail</TableHeaderColumn>
              <TableHeaderColumn dataField="body" dataAlign="center">body</TableHeaderColumn>
              <TableHeaderColumn dataField="userId" dataAlign="center">userId</TableHeaderColumn>
            </BootstrapTable>
          </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    historyTab: state.HistoryTab,
  }
};

export default connect(mapStateToProps)(HistoryDisplay);
