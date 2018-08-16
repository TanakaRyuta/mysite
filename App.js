import React,{Component} from 'react';
import {SectionList,AppRegistry,StyleSheet,Text,View} from 'react-native';

export default class FlatListBasics extends Component{
    render(){
      return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title:'D',data:['Devin']},
            {title:'J',data:['Jackson','James','Jillian','Jimmy','Joel','John','Julie']}
          ]}
          renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
          renderSectionHeader={({section})=><Text style={styles.SectionHeader}>{section.title}</Text>}
          keyExtractor={(item,index)=>index}
        />
      </View>
      );
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBtottom:2,
    fonttSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)'
  },
  item:{
    padding:10,
    fonttSize:18,
    height:44
  },
})

AppRegistry.registerComponent('hoge',()=>FlatListBasics);