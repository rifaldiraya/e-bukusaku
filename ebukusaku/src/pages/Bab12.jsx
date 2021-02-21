import React, { Component, Fragment } from 'react'

import Data from '../data/file2.json';

import Typography from '@material-ui/core/Typography';
export default class Bab12 extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Typography variant='h5' style={{margin: 10}}>{Data[1].title}</Typography>
                {
                    Data[1].text.map((v, i) => {
                        if(i===0){
                            return <Typography key={i} variant='h6' style={{margin: 8}}>{v}</Typography>
                        }else if((i+1) % 2 === 0 ){
                            return (
                                <Fragment key={i}>
                                    <Typography variant='body1' style={{margin: 5}}>-----------</Typography>
                                    <Typography variant='body1' style={{margin: 5}}>{v}</Typography>
                                </Fragment>
                            )
                        } else{
                            return <Typography key={i} variant='body1' style={{margin: 5}}>{v}</Typography>
                        }
                    })
                }
            </div>
        )
    }
}
