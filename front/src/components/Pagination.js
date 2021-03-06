// @flow

import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

type Props = {
  pages: number,
  clickNum: Function,
  tabLength: number,
};

type State = {
  num: number,
};

export default class Pagin extends Component<Props, State> {
  props: Props;
  state: State = {
    num:1
  }

  getFrac() {
     return this.props.tabLength / this.props.pages
  }

  getPage(tall: number) {
    let tab = [];
    for(let i = 0; i < tall; i++) {
      tab.push(i+1);
    }
    return tab
  }

  render() {
    const tall = this.getPage(this.getFrac());
    return (
      <Pagination aria-label="Page navigation example" style={{display: 'flex', justifyContent:'center'}}>
          {
            tall.map((x,i) => {
              return(
                <PaginationItem key={i}>
                  <PaginationLink href="#" onClick={() => this.props.clickNum(x)}>
                    {x}
                  </PaginationLink>
                </PaginationItem>
              )
            })
          }
      </Pagination>
    );
  }
}
