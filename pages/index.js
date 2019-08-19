import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'


import Company from './company';

export default class Home extends Component {

  render() {
    return (
          <Company/>
    )
  }
}