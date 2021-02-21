import React, { Component, Fragment } from 'react'

import Data from '../data/file2.json';

import Typography from '@material-ui/core/Typography';
export default class Bab14 extends Component {
    render() {
        return (
            <div>
                <Typography variant='h5' style={{margin: 10, textAlign: 'center'}}>{Data[3].title}</Typography>
                {
                    Data[3].text.map((v, i) => {
                        if((i) % 2 === 0 ){
                            return (
                                <Fragment key={i}>
                                    <Typography variant='body1' style={{margin: 5, textAlign: 'center'}}>-----------</Typography>
                                    <Typography variant='body1' style={{margin: 5, textAlign: 'right'}}>{v}</Typography>
                                </Fragment>
                            )
                        } else{
                            return <Typography key={i} variant='body1' style={{margin: 5, textAlign: 'left'}}>{v}</Typography>
                        }
                    })
                }
            </div>
        )
    }
}
