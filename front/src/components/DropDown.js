// @flow

import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

type State = {
  dropdownOpen: boolean,
  pages: number,
};

type Props = {
  click: Function,
};

class DropDown extends Component<Props, State> {
  props: Props;
  state: State = {
    dropdownOpen: false,
    pages: 20
  };

  toggle() {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  getPages(event: Object) {
    const e = parseInt(event.target.value, 10)
    this.setState({pages: e})
    this.props.click(e)
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
        <DropdownToggle caret style={{width: '300px', height: '50px', fontSize: '3em'}}>
          {this.state.pages}
        </DropdownToggle>
        <DropdownMenu style={{fontSize: '3em', width: '300px', textAlign: 'center'}}>
          <DropdownItem value='10' onClick={(event) => this.getPages(event)}>10</DropdownItem>
          <DropdownItem value='20' onClick={(event) => this.getPages(event)}>20</DropdownItem>
          <DropdownItem value='30' onClick={(event) => this.getPages(event)}>30</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDown;
