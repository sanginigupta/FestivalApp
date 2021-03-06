import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export const checkFaceBookIcon = (item,color,size)=>{
    if(item.facebook){
        return <AntDesign name="facebook-square" size={size} color={color}/>
    }
    return <AntDesign name='frowno' size={size} color={color}/>
}

export const checkInsIcon = (item,color,size)=>{
    console.log('icon')
    if(item.facebook){
        return <AntDesign name="instagram" size={size} color={color}/>
    }
    return <AntDesign name='frowno' size={size} color={color}/>
}

export const checkTwIcon = (item,color,size)=>{
    if(item.facebook){
        return <AntDesign name="twitter" size={size} color={color}/>
    }
    return <AntDesign name='frowno' size={size} color={color}/>
}

export const checkImage = (item,Componment)=>{
    if(item.image){
        //console.log(item.image)
        return <Componment source={{uri:`${item.image}`}}/>
    }else{
        return <Componment source={{uri:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>
    }

}

