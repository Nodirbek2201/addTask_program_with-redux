import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {searchKassa} from "../Redux/Action/Action";

function KassaSearch({kassalar,searchKassa}){

    const [dataKassa,setDataKassa] = useState([])
    const [inputValue,setInputValue] = useState('')

    useEffect(()=>{
        if(!inputValue)
            setDataKassa(kassalar)
    },[kassalar])

    function searchFunc(e){
        const value = e.target.value
        setInputValue(value)
        if(value){
            const searched_kassa = dataKassa.filter(item=>item.name.includes(value))
            searchKassa(searched_kassa)
        }else{
            searchKassa(dataKassa)
        }

    }

    return <input type="text" className={'form-control'} placeholder={'Search...'}
                  onChange={searchFunc} value={inputValue}/>
}

export default connect(null,{searchKassa})(KassaSearch)