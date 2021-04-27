import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from "./Components/store";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)