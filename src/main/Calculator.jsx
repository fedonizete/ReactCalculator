import { Component } from 'react'
import Display from '../components/Display'
import Buttons from '../components/Buttons'
import './Calculator.css'

const defaultValue = {
    currentValue: 0,
    values: [0, 0],
    operation: null,
    i: 0,
    clearDisplay: false
}


export default class Calculator extends Component {

    state = {...defaultValue}

    constructor(props){
        super(props)

        this.addDigit = this.addDigit.bind(this)
        this.clear = this.clear.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }

    clear(){
        this.setState({...defaultValue })
    }

    addDigit(e){


        const clear = this.state.clearDisplay || this.state.currentValue === 0
        const displayValue = clear ? '' : this.state.currentValue


        const displayNumber = Number(displayValue + e)
        

        this.setState({
            currentValue: displayNumber,
            clearDisplay: false
            })
    }

    setOperation(e){
        const values = [...this.state.values]
        let i = this.state.i
        const currentValue = this.state.currentValue
        const operation = this.state.operation
        let result

        this.setState({
            operation: e,
            clearDisplay: true
        })

        
        const newValue = parseFloat(currentValue)
        values[i] = newValue

        if(i === 1){

        console.log('i = 1')
            
            switch(operation){
                case '/':
                    result = values[0] / values[1];
                    
                break;
                case '+':
                    result = values[0] + values[1];
                break;
                
            }
            
            values[0] = result
            values[1] = 0

            this.setState({
                values,
                currentValue: result,
                i: 1
            })

            console.log(this.state.values)
        }else{
            console.log('i = 0')
            i = 1
        }

        this.setState({
            i: i,
            values
        })
    }
    

    render(){

        return(
            <div className='calculator'>
                <Display value={this.state.currentValue}/>
                <Buttons label='AC' double operation onClick={this.clear}/>
                <Buttons label='/' operation onClick={this.setOperation}/>
                <Buttons label='<' operation onClick={this.setOperation}/>
                <Buttons label='7' onClick={this.addDigit}/>
                <Buttons label='8' onClick={this.addDigit}/>
                <Buttons label='9' onClick={this.addDigit}/>
                <Buttons label='*' operation onClick={this.setOperation}/>
                <Buttons label='4' onClick={this.addDigit}/>
                <Buttons label='5' onClick={this.addDigit}/>
                <Buttons label='6' onClick={this.addDigit}/>
                <Buttons label='-' operation onClick={this.setOperation}/>
                <Buttons label='1' onClick={this.addDigit}/>
                <Buttons label='2' onClick={this.addDigit}/>
                <Buttons label='3' onClick={this.addDigit}/>
                <Buttons label='+' operation onClick={this.setOperation}/>
                <Buttons label='0' double onClick={this.addDigit}/>
                <Buttons label='.' onClick={this.addDigit}/>
                <Buttons label='=' operation onClick={this.setOperation}/>
            </div>
        )
    }
}