import { Component } from 'react'
import Display from '../components/Display'
import Buttons from '../components/Buttons'
import './Calculator.css'

const defaultValue = {
    currentValue: 0,
    displayValue: '0',
    values: [0, 0],
    operation: null,
    i: 0
}


export default class Calculator extends Component {

    state = {...defaultValue}

    constructor(props){
        super(props)

        this.addDigit = this.addDigit.bind(this)
        this.clear = this.clear.bind(this)
    }

    clear(){
        this.setState({...defaultValue })
    }

    addDigit(e){

        

        let displayValue = this.state.currentValue + e;

        this.setState({
            currentValue: displayValue
            })

    }
    

    render(){

        return(
            <div className='calculator'>
                <Display value={this.state.currentValue}/>
                <Buttons label='AC' double operation onClick={this.clear}/>
                <Buttons label='/' operation/>
                <Buttons label='<' operation/>
                <Buttons label='7' onClick={this.addDigit}/>
                <Buttons label='8' onClick={this.addDigit}/>
                <Buttons label='9' onClick={this.addDigit}/>
                <Buttons label='*' operation/>
                <Buttons label='4' onClick={this.addDigit}/>
                <Buttons label='5' onClick={this.addDigit}/>
                <Buttons label='6' onClick={this.addDigit}/>
                <Buttons label='-' operation/>
                <Buttons label='1' onClick={this.addDigit}/>
                <Buttons label='2' onClick={this.addDigit}/>
                <Buttons label='3' onClick={this.addDigit}/>
                <Buttons label='+' operation/>
                <Buttons label='0' double onClick={this.addDigit}/>
                <Buttons label='.' onClick={this.addDigit}/>
                <Buttons label='=' operation/>
            </div>
        )
    }
}