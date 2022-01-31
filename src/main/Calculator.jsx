import { Component } from 'react'
import Display from '../components/Display'
import Buttons from '../components/Buttons'
import './Calculator.css'

const defaultValue = {
    currentValue: 10,
    values: [0, 0],
    operation: null,

}


export default class Calculator extends Component {

    state = {...defaultValue}

    constructor(props){
        super(props)

    }

    addDigit(e){

    }
    

    render(){

       

        

        return(
            <div className='calculator'>
                <Display value={100}/>
                <Buttons label='AC' double operation/>
                <Buttons label='/' operation/>
                <Buttons label='<' operation/>
                <Buttons label='7'/>
                <Buttons label='8'/>
                <Buttons label='9'/>
                <Buttons label='*' operation/>
                <Buttons label='4'/>
                <Buttons label='5'/>
                <Buttons label='6'/>
                <Buttons label='-' operation/>
                <Buttons label='1'/>
                <Buttons label='2'/>
                <Buttons label='3'/>
                <Buttons label='+' operation/>
                <Buttons label='0' double/>
                <Buttons label='.'/>
                <Buttons label='=' operation/>
            </div>
        )
    }
}