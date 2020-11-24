import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions/name';

class Hello extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <button type="button" onClick={() => this.props.setName('new name')}>
          set name
        </button>
        <p>Hello World {this.props.name}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
