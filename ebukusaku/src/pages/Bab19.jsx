import React, { Component } from 'react'

import Data from '../data/file2.json';
//Component
import Content from '../layout/Content';
export default class Bab19 extends Component {
    render() {
        return (
            <div>
                <Content data={Data[7]} variant='1'/>
            </div>
        )
    }
}