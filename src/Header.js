import React from 'react';
import {Text,View} from 'react';

const Header = () =>{
    const{headerText,headder} = styles;
    return(
        <View styles={header}>
            <Text style={headerText}>ヘッダー</Text>
        </View>
    );
};

const styles = {
    header:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        elevation:2,
        position:'relative'
    },
    headerText:{
        fontSize:20,
        fontWeight:'600'
    }
};

export default Header;