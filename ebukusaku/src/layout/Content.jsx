import React, { Fragment } from 'react'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const arabicRegex = /[\u0600-\u06FF]/;

export default function Content({data, variant='default'}) {

    //type 1 untuk doa-doa seperti pada bab 
    if(variant === '1'){
        return (
            <div style={{textAlign: 'center', margin: 20}}>
                <Typography variant='h5' style={{margin: 10, fontSize: 24}}>{data.title}</Typography>
                <Typography variant='body1' style={{margin: 5}}>{data.subtitle}</Typography>
                <Divider style={{backgroundColor: '#00af91', marginBottom: 10}}/>
                <Typography variant='body1' style={{margin: 5, fontSize: 21}}>بِسْمِ اللهِ الرّحْمنِ الرّحِيْمِ</Typography>
                {
                    data.text.map((v, i) => (
                        <Fragment key={i}>
                            {v.match(arabicRegex) ? <Typography variant='body1' style={{margin: 5, fontSize: 18}}>{v}</Typography> : <Typography variant='body1' style={{margin: 5, fontSize: 14}}>{v}</Typography>}
                        </Fragment>
                    ))
                }
                <img src='assets/img/pembatas.png' alt='pembatas' style={{bottom:0, left:0, marginTop: 100}}/>
            </div>
        );
    } else if(variant === '2'){
        return (
            <div style={{textAlign: 'center', margin: 20}}>
                <Typography variant='h5' style={{margin: 10, fontSize: 24}}>{data.title}</Typography>
                <Typography variant='body1' style={{margin: 5}}>{data.subtitle}</Typography>
                <Divider style={{backgroundColor: '#00af91', marginBottom: 10}}/>
                <Typography variant='body1' style={{margin: 5, fontSize: 21}}>بِسْمِ اللهِ الرّحْمنِ الرّحِيْمِ</Typography>
                {
                    data.text.map((v, i) => (
                        <Fragment key={i}>
                            {v.match(arabicRegex) ? <Typography variant='body1' style={{margin: 5, fontSize: 18, textAlign: 'justify', textAlignLast:'right'}}>{v}</Typography> : <Typography variant='body1' style={{margin: 5, fontSize: 14}}>{v}</Typography>}
                        </Fragment>
                    ))
                }
                <img src='assets/img/pembatas.png' alt='pembatas' style={{bottom:0, left:0, marginTop: 100}}/>
            </div>
        );
    } else {
        return (
            <div style={{textAlign: 'center', margin: 20}}>
                <Typography variant='h5' style={{margin: 10}}>{data.title}</Typography>
                <Typography variant='body1' style={{margin: 5}}>{data.subtitle}</Typography>
                <Divider style={{backgroundColor: '#00af91', marginBottom: 10}}/>
                    {
                        data.text.map((v, i) => {
                            if((i) % 3 === 0 ){
                                return (
                                    <Fragment key={i}>
                                        {i === 0 ? null : <Typography variant='body1' style={{margin: 5}}>-----------</Typography>}
                                        {v === 'بِسْمِ اللهِ الرّحْمنِ الرّحِيْمِ' ? <Typography variant='body1' style={{margin: 5, fontSize: 22}}>بِسْمِ اللهِ الرّحْمنِ الرّحِيْمِ</Typography> : v.match(arabicRegex) ? <Typography variant='body1' style={{margin: 5, fontSize: 18}}>{v}</Typography> : <Typography variant='body1' style={{margin: 5, fontSize: 14}}>{v}</Typography>}
                                    </Fragment>
                                )
                            } else{
                                return v.match(arabicRegex) ? <Typography variant='body1' style={{margin: 5, fontSize: 18}}>{v}</Typography> : <Typography variant='body1' style={{margin: 5, fontSize: 14}}>{v}</Typography>
                            }
                        })
                    }
            </div>
        )
    }
}