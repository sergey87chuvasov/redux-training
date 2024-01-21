import { connect } from 'react-redux';
import { Component } from 'react';
import { increment, decrement, reset } from './store';
import './App.css';

// 2 opt
// import { bindActionCreators } from 'redux';

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
    // console.log(this.props);
    return (
      <div>
        {/* 2 and 3 opt */}
        <h2>{this.props.count}</h2>
        <button onClick={this.props.dec}>-</button>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.res}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});
// const mapDispatchToProps = (dispatch) => ({
//   inc: () => dispatch(increment),
//   dec: () => dispatch(decrement),
//   res: () => dispatch(reset),
// });

// 2 opt
// const mapDispatchToProps = (dispatch) => ({
//   inc: bindActionCreators(increment, dispatch),
//   dec: bindActionCreators(decrement, dispatch),
//   res: bindActionCreators(reset, dispatch),
// });

// 3 opt
const mapDispatchToProps = {
  inc: increment,
  dec: decrement,
  res: reset,
};

const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
