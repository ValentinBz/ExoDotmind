// @flow

import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Details from './Details';
import HistoryDisplay from './HistoryDisplay';

type State = {};

type Props = {};

class App extends Component<Props, State> {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={List} />
					<Route path="/id/:id" component={Details}/>
					<Route path="/historyTab" component={HistoryDisplay}/>
				</Switch>
			</div>
		);
	}
}

export default App;
