// @flow

import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

type Props = {
  click: Function,
  datas: Array<Object>,
};

export default class Tables extends Component<Props> {
  props: Props;

  render() {

		let options = {
		 onRowClick: this.props.click
		}

    return (
        <div>
          <BootstrapTable bodyStyle={{fontSize: '2em'}} headerStyle={{ fontSize: '2em' }} data={this.props.datas} striped={true} hover={true} options={options}>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center">ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataAlign="center">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataAlign="center">email</TableHeaderColumn>
            <TableHeaderColumn dataField="body" dataAlign="center">body</TableHeaderColumn>
            <TableHeaderColumn dataField="postId" dataAlign="center">postId</TableHeaderColumn>
          </BootstrapTable>
        </div>

    );
  }
}
