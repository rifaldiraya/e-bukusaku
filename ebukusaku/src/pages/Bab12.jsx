import React, { Component, Fragment } from 'react'

import Data from '../data/file2.json';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Section = ({variant, text}) => {
    if(variant==='1'){
        return (
            <div>
                {
                    text.map((v, i) => {
                        if(i % 2 === 0){
                            return <Typography key={i} variant='body1' style={{margin: 5, fontSize: 18, textAlign: 'right'}}>{v}</Typography>
                        }else {
                            return <Typography key={i} variant='body1' style={{margin: 5, fontSize: 18, textAlign: 'left'}}>{v}</Typography>
                        }
                    })
                }
            </div>
        )
    }else if(variant==='2'){
        return(
            <div style={{margin: 5, fontSize: 18, textAlign: 'center'}} text-direction="rtl">
                {
                    text.map((v, i) => {
                        return <Typography key={i} variant='body1' >{v}</Typography>
                    })
                }
            </div>
        )
    }else {
        return;
    }
}
export default class Bab12 extends Component {
    render() {
        return (
            // <Content data={Data[0]} variant='1'/>
            <div style={{textAlign: 'center', margin: 30}}>
                <Typography variant='h5' style={{margin: 10, fontSize: 24}}>﴾ {Data[0].title} ﴿ </Typography>
                <Typography variant='body1' style={{margin: 5}}>{Data[0].subtitle}</Typography>
                <Divider style={{backgroundColor: '#00af91', marginBottom: 10}}/>
                <Section variant='1' text={Data[0].text.section1}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='2' text={Data[0].text.section2}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section3}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section4}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section5}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section6}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section7}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section8}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section9}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section10}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section11}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section12}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section13}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section14}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section15}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section16}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section17}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section18}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section19}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section20}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section21}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section22}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section23}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section24}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section25}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section26}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section27}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section28}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section29}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section30}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section31}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section32}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section33}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section34}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section35}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section36}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section37}/>
                <br/>
                <Typography style={{margin: 5, fontSize: 24}}>اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ</Typography>
                <Section variant='1' text={Data[0].text.section38}/>
                <img src='assets/img/pembatas.png' alt='pembatas' style={{bottom:0, left:0, marginTop: 100}}/>
            </div>
        )
    }
}
