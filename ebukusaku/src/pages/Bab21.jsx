import React, { Component } from 'react'

import Data from '../data/file2.json';

import Content from '../layout/Content';
export default class Bab21 extends Component {
    render() {
        return (
            <Content data={Data[9]} variant='1'/>
        )
    }
}