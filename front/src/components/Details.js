
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import LoadingPage from './Loading';

type State = {
  details: Object,
};

type Props = {
  Undo: Function,
  Details: Object,
  body: string,
  title: string,
  id: string,
  history: Object,
};

class Details extends Component<State, Props> {
  props: Props;
  state: State = {
    details: {},
  };

  Undo() {
    this.props.history.push(`/`);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.Details !== this.state.details) {
      this.setState({details: nextProps.Details})
    }
  }

  render() {
    if(this.state.details) {
      return (
        <div>
          <Button onClick={this.Undo.bind(this)}>Retour</Button>
          <h2>{this.state.details.id}</h2>
          <h2>{this.state.details.title}</h2>
          <h2>{this.state.details.body}</h2>
          <h2>{this.state.details.mail}</h2>
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
    Details: state.DetailsId
  }
}

export default connect(mapStateToProps)(Details);
