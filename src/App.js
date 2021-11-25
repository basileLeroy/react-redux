import { useSelector, useDispatch } from 'react-redux';
import { create, update, remove } from './actions';

const App = () => {
  const list = useSelector(state => state.crud)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value, e.target.text.value)
    dispatch(create(e.target.name.value, e.target.text.value))
  }
  return (
    <div className="App">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>{item.name}
                <button onClick={() => {
                    dispatch(remove(index))}}
                >delete</button></li>
          )
        })}
      </ul>
      <br />
      <form onSubmit={handleSubmit}>
        <label for="name">First name:</label><br />
        <input type="text" id="name" name="name" /><br />
        <label for="text">Text:</label><br />
        <input type="text" id="text" name="text" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App;
