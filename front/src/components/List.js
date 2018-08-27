// @flow

import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTotalList, getId, slicedList } from '../actions/index';
import { Container, Button } from 'reactstrap';
import LoadingPage from './Loading';
import Pagin from './Pagination';
import DropDown from './DropDown';
import Tables from './Tables';

type State = {
	value: string,
	numStart: number,
	numStop: number,
	pages:20,
};

type Props = {
  getTotalList: Function,
  getId: Function,
  TotalList: Array<Object>,
  history: Object,
};

const defaultState = {
	numStart: 0,
	numStop: 20,
};

class List extends Component<State, Props> {
	props: Props;
	state: State = {
		value: "",
		numStart: defaultState.numStart,
		numStop: defaultState.numStop,
		pages:20,
	};

	async componentWillMount() {
		const { getTotalList } = this.props;
		getTotalList();
	};

	componentDidUpdate(prevProps, prevState) {
		if(this.props.TotalList !== prevProps.TotalList) {
			this.getPageNumber(1)
		}
	};

	handleHistory = () => {
		this.props.history.push(`/historyTab`)
	};

	handleRowClick = (row) => {
		this.props.history.push(`/id/${row.id}`)
		this.props.getId({id: row.id, email: row.email});
	};

	handleChange = (event) => {
		const numberParsed = parseInt(event.target.value, 10);
		this.setState({value: numberParsed})
	};

	tabFilter = () => {
		return this.props.TotalList.filter(x => x.postId === this.state.value);
	};

	getPageNumber = (num) => {
		if(num === 1) {
			this.setState({
				numStart: defaultState.numStart,
				numStop: this.state.pages
			})
			this.props.slicedList(this.props.TotalList, defaultState.numStart, this.state.pages)
		} else {
			this.getCalc(num)
		}
	};

	getCalc = (num) =>  {
		if(this.state.pages !== 20) {
			const mult = this.state.pages *  (num - 1);
			this.setState({
				numStart: defaultState.numStart + mult,
				numStop: this.state.pages + mult
			})
			this.props.slicedList(this.props.TotalList, defaultState.numStart + mult, this.state.pages + mult)
		} else {
			const mult = this.state.pages *  (num - 1);
			this.setState({
				numStart: defaultState.numStart + mult,
				numStop: defaultState.numStop + mult
			})
			this.props.slicedList(this.props.TotalList, defaultState.numStart + mult, defaultState.numStop + mult)
		}
	}

	getNumDropDown = (numPerPage) => {
		this.setState({pages: numPerPage},() => this.getPageNumber(1))
	};

	render() {

		let Array = this.props.SlicedList;
		if(this.state.value) {
			Array = this.tabFilter();
		}

		if(this.props.TotalList.length !== 0) {
		 	return(
				<Container fluid>
					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<Button color='primary' style={{fontSize: '3em'}} onClick={this.handleHistory.bind(this)}>
							History
						</Button>
						<DropDown click={this.getNumDropDown.bind(this)}/>
						<input onChange={this.handleChange} style={{fontSize: '3em'}}/>
					</div>

					<Pagin clickNum={this.getPageNumber.bind(this)} tabLength={this.props.TotalList.length} pages={this.state.pages}/>
					<Tables click={this.handleRowClick.bind(this)} datas={Array}/>
				</Container>
			);
		} else {
			return(
				<div>
					<LoadingPage />
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		TotalList: state.TotalList,
		Details: state.DetailsId,
		SlicedList: state.SlicedList,
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getTotalList, getId, slicedList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
/*
let persistStorage = JSON.parse(localStorage.getItem('persist:root'));
console.log('persistStorage : ', persistStorage)
console.log('persistStorage.historyTab : ', persistStorage.historyTab)

if(persistStorage.length !== 0) {
	 for(let i = 0; i < persistStorage.length; i++) {
		 console.log('persistStorage.historyTab : ', persistStorage.historyTab)
	 }
}
*/
