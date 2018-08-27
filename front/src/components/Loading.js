
import React, {Component} from 'react';

type State = {
	className: string,
};

class LoadingPage extends Component<State> {
	// props: Props;

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
