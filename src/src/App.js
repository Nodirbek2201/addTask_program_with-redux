import {Switch, Link, Route,Redirect} from 'react-router-dom'
import {SiReact, SiReactrouter, SiRedux} from "react-icons/all";
import Foydalanuchilar from "./Pages/Foydalanuchilar";
import Kassalar from "./Pages/Kassalar";
import Kirimlar from "./Pages/Kirimlar";
import Chiqimlar from "./Pages/Chiqimlar";

function App() {

    return <div className={'app'}>
        <div className={'container'}>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="menu">
                        <li><Link to={'/foydalanuvchi'}>Foydalanuvchi</Link></li>
                        <li><Link to={'/kassa'}>Kassa</Link></li>
                        <li><Link to={'/kirim'}>Kirim</Link></li>
                        <li><Link to={'/chiqim'}>Chiqim</Link></li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route path={'/foydalanuvchi'} component={Foydalanuchilar}/>
                <Route path={'/kassa'} component={Kassalar}/>
                <Route path={'/kirim'} component={Kirimlar}/>
                <Route path={'/chiqim'} component={Chiqimlar}/>
                <Redirect to={'/foydalanuvchi'}/>
            </Switch>
        </div>
        <div className={'footer'}>
            <p className={'title'}>Developed by <span className={'text-dark'}>Nodir</span>, Using <SiReact
                color={'#5ed3f3'}/> React, <SiRedux color={'#7248b6'}/> Redux
                and <SiReactrouter color={'#e94949'}/> Router
            </p>
        </div>
    </div>

}

export default App