import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';
import { useActions } from './use-actions';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
