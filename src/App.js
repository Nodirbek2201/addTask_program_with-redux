import {useState} from "react";
import {connect} from "react-redux";
import Open from "./Tasks/Open";
import Inprogress from "./Tasks/Inprogress";
import Completed from "./Tasks/Completed";
import MyModal from "./Components/MyModal";

function App({open, inprogress, completed}) {
    const [modalVisible, setModalVisible] = useState(false)

    function modalToggle() {
        setModalVisible(prev => !prev)
    }

    return <div className={'container'}>
        <div className="row app justify-content-center">
            <div className="col-lg-10">
                <div className="card text-center h-100">
                    <div className="card-header bg-dark text-white">
                        <h1>Umumiy tasklar soni: <span
                            className={'btn bg-warning'}>{open.length + completed.length + inprogress.length}</span>
                        </h1>
                    </div>
                    <div className="card-body tasks">
                        <div className="row">
                            <div className="col-lg-4">
                                <Open modalToggle={modalToggle}/>
                            </div>
                            <div className="col-lg-4">
                                <Inprogress modalToggle={modalToggle}/>
                            </div>
                            <div className="col-lg-4">
                                <Completed modalToggle={modalToggle}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MyModal modalVisible={modalVisible} modalToggle={modalToggle}/>
    </div>
}

export default connect(({open, inprogress, completed}) => ({open, inprogress, completed}))(App)