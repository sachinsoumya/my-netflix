import Body from "./Components/Body";
import appStore from "./Utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>

      {/* <p className='font-semibold text-stone-600'>
          
        </p> */}
    </div>
  );
}

export default App;
