import { Component, Children } from "react";
import Head from 'next/head';

import Nav from '../components/nav';
import 'bootstrap-css-only/css/bootstrap.min.css';

export default class Layout extends Component {
    
    render() {
        const { children, title = 'Home' } = this.props;
    
        return (
            <>
                <Head>
                    <title>{ title }</title>
                </Head>
                <Nav/>

                <div className="container">
                    { children }
                </div>
            </>
        )
    }
}