
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

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
    return (
      <Fragment>
        <Button onClick={this.Undo.bind(this)}>Retour</Button>
        {
          this.props.historyTab.map(obj => {
            return(
              <div>
                <h2>{obj.id}</h2>
                <h2>{obj.title}</h2>
                <h2>{obj.body}</h2>
                <h2>{obj.mail}</h2>
              </div>
            );
          })
        }
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
