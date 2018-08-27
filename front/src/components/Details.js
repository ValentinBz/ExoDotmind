
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingPage from './Loading';
import { getLocalStorage } from '../actions/index';

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
    storage: {}
  };

  Undo() {
    this.props.getLocalStorage(false, {})
    this.props.history.push(`/`);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.Details !== this.state.details) {
      this.setState({details: nextProps.Details})
    }
  }

  readLocalStorage = () => {
    if(this.props.BoolStorage.bool) {
      let newItem = true;
      let loc = JSON.parse(localStorage.getItem('persist:root'));
      let obj = JSON.parse(loc.HistoryTab);
      const tab = obj.find(x => x.id === this.props.BoolStorage.id);
      return tab
    } else {
      return this.state.details
    }
  };


  render() {
    if(this.state.details || this.props.BoolStorage.bool) {
      const datas = this.readLocalStorage();
      return (
        <div>
          <Button onClick={this.Undo.bind(this)}>Retour</Button>
          <h2>{datas.id}</h2>
          <h2>{datas.title}</h2>
          <h2>{datas.body}</h2>
          <h2>{datas.mail}</h2>
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
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLocalStorage },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
