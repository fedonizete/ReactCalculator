import { Component } from 'react'
import Display from '../components/Display'
import Buttons from '../components/Buttons'
import './Calculator.css'

export default class Calculator extends Component {
    render(){
        return(
            <div className='calculator'>
                <Display />
                <Buttons/>
                <Buttons/>
                <Buttons/>
                <Buttons/>
                <Buttons/>
                <Buttons/>
                <Buttons/>
                <Buttons/>
                <Buttons/>
                
            </div>
        )
    }
}