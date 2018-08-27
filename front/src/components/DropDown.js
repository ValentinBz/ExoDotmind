import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

type State = {
  dropdownOpen: Boolean,
  pages: number,
};

class DropDown extends Component<State> {
    state: State = {
      dropdownOpen: false,
      pages: 20
    };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  getPages(event) {
    const e = parseInt(event.target.value)
    this.setState({pages: e})
    this.props.click(e)
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
        <DropdownToggle caret style={{width: '300px', height: '50px', fontSize: '3em'}}>
          {this.state.pages}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value='10' onClick={(event) => this.getPages(event)}>10</DropdownItem>
          <DropdownItem value='20' onClick={(event) => this.getPages(event)}>20</DropdownItem>
          <DropdownItem value='30' onClick={(event) => this.getPages(event)}>30</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDown;
