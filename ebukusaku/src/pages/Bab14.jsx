import React, { Component } from 'react'

import Data from '../data/file2.json';

import Content from '../layout/Content';
export default class Bab14 extends Component {
    render() {
        return (
            <div>
                <Content data={Data[2]} variant='2'/>
            </div>
        )
    }
}
