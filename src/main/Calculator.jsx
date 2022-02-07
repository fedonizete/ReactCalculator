import { Component } from 'react'
import Display from '../components/Display'
import Buttons from '../components/Buttons'
import './Calculator.css'

const defaultValue = {
    currentValue: 0,
    values: [0, 0],
    operation: null,
    i: 0,
    clearDisplay: false,
    fontSize: ''
}


export default class Calculator extends Component {

    state = {...defaultValue}

    constructor(props){
        super(props)

        this.addDigit = this.addDigit.bind(this)
        this.clear = this.clear.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.backspace = this.backspace.bind(this)
    }

    setFont(e){                                 // adjust display font size based on e.length

        const size = e.length

        if(size > 7){
            if(size < 14){
                this.setState({fontSize: 'small'})
            }else{
                this.setState({fontSize: 'smaller'})
            }
        }else{
            this.setState({fontSize: ''})
        }
    }

    clear(){
        this.setState({...defaultValue })
    }

    addDigit(e){


        const clear = this.state.clearDisplay || this.state.currentValue === 0
        const displayValue = clear ? '' : this.state.currentValue

        parseFloat(displayValue) && parseFloat(e)

        const displayNumber = displayValue + e
        
        this.setFont(displayNumber)

        this.setState({
            currentValue: displayNumber,
            clearDisplay: false
            })
    }

    backspace(){
        const currentValue = this.state.currentValue
        let newCurrentValue = currentValue.slice(0, -1)

        if(newCurrentValue === ''){
            newCurrentValue = 0
        }

        this.setFont(newCurrentValue)

        this.setState({
            currentValue: newCurrentValue
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

            
            switch(operation){
                case '/':
                    result = values[0] / values[1];
                break;

                case '*':
                    result = values[0] * values[1]
                break;
                
                case '-':
                    result = values[0] - values[1]
                break;

                case '+':
                    result = values[0] + values[1];
                break;
                case '=':
                    result = currentValue
            }

            values[0] = result
            values[1] = 0


            if (isNaN(values[0]) || !isFinite(values[0])) {         
                this.clearMemory()
            return
            }


            const strResult = result.toString();
            this.setFont(strResult)
            
            
            this.setState({
                values,
                currentValue: result,
                i: 1
            })
        }else{
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
                <Display value={this.state.currentValue} fontSize={this.state.fontSize}/>
                    
                <Buttons label='AC' double operation onClick={this.clear}/>
                <Buttons label='/' operation onClick={this.setOperation}/>
                <Buttons label='<' operation onClick={this.backspace}/>
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