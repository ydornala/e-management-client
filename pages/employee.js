import { Component } from "react";
import fetch from 'isomorphic-unfetch';
import Layout from './layout';

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] }

        this.getEmployees();
    }

    async getEmployees() {
        const res = await fetch('https://e-management-server.herokuapp.com/api/employee', {method: 'GET'});
        const employees = await res.json();
        
        this.setState({employees: employees});
    }

    render() {
        return (
            <Layout title="Employee">
                Employee
            </Layout>
        )
    }
} 