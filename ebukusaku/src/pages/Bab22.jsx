import React, { Component } from 'react'

import Data from '../data/file2.json';

import Content from '../layout/Content';
export default class Bab22 extends Component {
    render() {
        return (
            <Content data={Data[10]} variant='1'/>
        )
    }
}