import React, { Component } from 'react'

import Data from '../data/file2.json';

import Typography from '@material-ui/core/Typography';
export default class Bab13 extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Typography variant='h5' style={{margin: 10}}>{Data[2].title}</Typography>
                <Typography>--------------</Typography>
                {
                    Data[2].text.map((v, i) => {
                        if(v === 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ'){
                            return <Typography key={i} variant='h6' style={{margin: 8}}>{v}</Typography>
                        } else{
                            return <Typography key={i} variant='body1' style={{margin: 5}}>{v}</Typography>
                        }
                    })
                }
            </div>
        )
    }
}
