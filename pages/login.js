import React, { Component } from 'react';

import Nav from '../components/nav';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Layout from './layout';

export default class Login extends Component {
    render() {
        return (
            <Layout>
            <div className="container">
                <div className="login-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-wrapper">
                                <form>
                                    login
                                </form>
                            </div>  
                        </div>
                    </div>
                </div>
                <style jsx>{
                    `

                    `
                }</style>
            </div>
            </Layout>
        );
    }
}