import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {searchFoydalanuvchi} from "../Redux/Action/Action";

function FoydalanuvchiSearch({foydalanuvchilar,searchFoydalanuvchi}){

    const [dataFoydalanuvchilar,setDataFoydalanuvchilar] = useState([])
    const [inputValue,setInputValue] = useState('')

    useEffect(()=>{
        if(!inputValue)
        setDataFoydalanuvchilar(foydalanuvchilar)
    },[foydalanuvchilar])

    function searchFunc(e){
        const value = e.target.value
        setInputValue(value)
        if(value){
            const searched_foydalanuvchilar = dataFoydalanuvchilar.filter(item=>item.name.includes(value)||item.phone.includes(value))
            searchFoydalanuvchi(searched_foydalanuvchilar)
        }else{
            searchFoydalanuvchi(dataFoydalanuvchilar)
        }

    }

    return <input type="text" className={'form-control'} placeholder={'Search...'}
    onChange={searchFunc} value={inputValue}/>
}

export default connect(null,{searchFoydalanuvchi})(FoydalanuvchiSearch)