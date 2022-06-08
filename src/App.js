import './app.scss';
import Counter from './components/Counter'
import InputText from './components/UseState';
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      <Counter/>
      <InputText/>
      <Form/>
    </div>
  );
}

export default App;
