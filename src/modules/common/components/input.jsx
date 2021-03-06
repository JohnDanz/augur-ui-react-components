import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import shouldComponentUpdatePure from '../../../utils/should-component-update-pure';

export default class Input extends Component {
	static propTypes = {
		type: PropTypes.string,
		className: PropTypes.string,
		value: PropTypes.any,
		isMultiline: PropTypes.bool,
		isClearable: PropTypes.bool,
		debounceMS: PropTypes.number,
		onChange: PropTypes.func,
		onBlur: PropTypes.func
	};

	constructor(props) {
		super(props);
		this.finalDebounceMS = this.props.debounceMS > 0 || this.props.debounceMS === 0 ? this.props.debounceMS : 750;
		this.state = {
			value: this.props.value || '',
			timeoutID: ''
		};
		this.shouldComponentUpdate = shouldComponentUpdatePure;
		this.componentWillReceiveProps = (nextProps) => {
			if ((nextProps.value || nextProps.value === 0) && nextProps.value !== this.state.value && nextProps.value !== this.props.value) {
				this.setState({ value: nextProps.value });
			}
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleOnChange = (e) => {
		const newValue = e.target.value;
		if (this.finalDebounceMS) {
			clearTimeout(this.state.timeoutID);
			if (newValue !== this.props.value) {
				this.setState({ timeoutID: setTimeout(() => this.props.onChange(newValue), this.finalDebounceMS) });
			}
		} else if (newValue !== this.props.value) {
			this.props.onChange(newValue);
		}
		this.setState({ value: newValue });
	}

	handleOnBlur = () => {
		if (this.finalDebounceMS) {
			clearTimeout(this.state.timeoutID);
			if (this.state.value !== this.props.value) {
				this.props.onChange(this.state.value);
			}
		}
		this.props.onBlur && this.props.onBlur();
	}

	handleClear = () => {
		this.setState({ value: '' });
		this.props.onChange('');
	}

	render() {
		const p = this.props;
		const s = this.state;

		return (
			<div className={classnames('input', { clearable: p.isClearable }, this.props.className)}>
				{!p.isMultiline &&
					<input
						{...p}
						className="box"
						value={s.value}
						onChange={this.handleOnChange}
						onBlur={this.handleOnBlur}
					/>
				}

				{p.isMultiline &&
					<textarea
						{...p}
						className="box"
						value={s.value}
						onChange={this.handleOnChange}
						onBlur={this.handleOnBlur}
					/>
				}

				{!p.isMultiline && p.isClearable &&
					<button type="button" className="clear" onClick={this.handleClear}>
						&#xf00d;
					</button>
				}
			</div>
		);
	}
}
