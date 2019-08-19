import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

import fetch from 'isomorphic-unfetch';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Company from './company';

export default class Home extends Component {

  render() {
    return (
          <Company/>
    )
  }
}