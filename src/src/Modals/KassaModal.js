import {connect} from 'react-redux'
import {Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap'
import {useEffect, useState} from "react";
import {addKassa,editKassa} from "../Redux/Action/Action";

function KassaModal({modalVisible,toggleModal,addKassa,modalStatus,kassa_id,kassalar,editKassa}) {

    const [inputVals,setInputVals] = useState({
        name: '',
    })

    useEffect(()=>{
        if(kassa_id.id){
            kassalar.forEach(item=>{
                if(item.id===kassa_id.id)
                    setInputVals({
                        id:kassa_id.id,
                        name:item.name,
                    })
            })
        }
    },[kassa_id])

    function changeInput(status,value){
        if(status==='name')
            setInputVals({...inputVals,name:value})
    }

    function formSubmited(e){
        e.preventDefault()
        if(modalStatus==='adding'){
            addKassa({
                name:inputVals.name,
            })
        }else {
            editKassa({
                id:inputVals.id,
                name:inputVals.name,
            })
        }
        setInputVals({
            name: '',
            phone: ''
        })
        toggleModal()
    }

    return <Modal isOpen={modalVisible} toggle={toggleModal}>
        <ModalHeader>
            Kassa Qo`shish
        </ModalHeader>
        <ModalBody>
            <form id={'my-form'} className={'w-75 mx-auto'} onSubmit={formSubmited}>
                <input type="text" className={'form-control my-3'} placeholder={'Nomi'} value={inputVals.name}
                onChange={(e)=>changeInput('name',e.target.value)} required/>
                <input type="date" className={'form-control'}/>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-success" form={'my-form'}>save</button>
            <button className="btn btn-danger" onClick={toggleModal}>close</button>
        </ModalFooter>
    </Modal>

}

export default connect(null,{addKassa,editKassa})(KassaModal);