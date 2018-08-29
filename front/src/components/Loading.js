// @flow
import React, {Component} from 'react';

type State = {
	className: string,
};

type Props = {};

class LoadingPage extends Component<Props, State> {
	render() {
		return (
			<div>
				<h1>Loading...</h1>
				<i className="fas fa-spinner fa-pulse fa-3x" />
			</div>
		);
	}
}

export default LoadingPage;
