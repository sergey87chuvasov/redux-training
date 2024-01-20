import { connect } from 'react-redux';
import { Component } from 'react';
import { increment, decrement, reset } from './store';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Hello Redux</h1>
      <Counter />
    </div>
  );
}

class _Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button>-</button>
        <button>+</button>
        <button>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = () => {};

const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
