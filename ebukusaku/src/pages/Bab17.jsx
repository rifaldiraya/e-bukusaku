import React, { Component } from 'react'

import Data from '../data/file2.json';
//Component
import Content from '../layout/Content';
export default class Bab17 extends Component {
    render() {
        return (
            <Content data={Data[5]} variant='1'/>
        )
    }
}