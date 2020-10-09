import React, { Component } from 'react'
 
import { getDepartments } from '../services/api'
 
class Departments extends Component {
 
    getDepartments = async () => {

        this.props.showLoading('Loading Departments!');
        
        const response = await getDepartments().then(response => {
            this.props.hideLoading();
            
            return response;
        })
        console.log({ response })
    }
 
    render() {
        return (
            <button onClick={this.getDepartments}>Buscar departamentos</button>
        )
    }
}
 
export default Departments;