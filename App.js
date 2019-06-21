import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, SectionList, Dimensions, Alert, ScrollView, TouchableOpacity, ToastAndroid} from 'react-native';
const {height: HEIGHT} = Dimensions.get('window')
const {width: WIDTH} = Dimensions.get('window')


class App extends Component {
   constructor(props){
      super(props);
      this.state={
          result:"",
          result1:""
      }
      this.UpdateVal = this.UpdateVal.bind(this);
      this.ClearCal = this.ClearCal.bind(this);
      this.Equals = this.Equals.bind(this);
      this.ShowOutput = this.ShowOutput.bind(this);

  }
  ClearCal(){
     this.setState({
        result:""
     })
  }

  UpdateVal(x){
     if(x){
      this.setState({
         result: this.state.result + x
      })
     }
  }
  
  Equals(){
     this.setState({
        result:eval(this.state.result)
     })
}

ShowOutput(){
   this.setState({
      result:this.state.result
   })
}

 render() {
     return (
        
        <View style={styles.container}>
          <ResultSection ShowInputVal={this.state.result}/>
          <InputSection InputVal={this.UpdateVal} ClearVal={this.ClearCal} EqualsTo={this.Equals}/>
        </View>  
         
         
     );
 }
}  




class ResultSection extends Component {

   constructor(props){
      super(props);
      this.state={}
   }
    
  render(){
      return(
          <View style={styles.ResultContainer}>
              <View style={{marginTop:160,marginRight:20}}>
              <Text style={styles.ResultText}>{this.props.ShowInputVal}</Text>
              </View>
          </View>
      );
  }
}

class InputSection extends Component {

   constructor(props){
      super(props);
      this.state={
         result1:''
      }
   }

   UpdateVal(y){
      this.setState({
          result1: y + this.state.result1
      })
   }
   handleChange(x){
      var z = x;
      this.props.InputVal(z);
   }
 
    render(){
        return(
            <View style={styles.InputContainer}>
                <TouchableOpacity onPress={this.handleChange.bind(this,1)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>1</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,2)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>2</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,3)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>3</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,4)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>4</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,5)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>5</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,6)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>6</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,7)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>7</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,8)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>8</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,9)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>9</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,0)}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>0</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,'+')}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>+</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,'-')}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>-</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,'/')}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>/</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,'*')}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>*</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handleChange.bind(this,'.')}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>.</Text>    
               </View> 
               </TouchableOpacity>
                
               <View style={styles.sideBtn}>
               <TouchableOpacity onPress={this.props.ClearVal}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>CLR</Text>    
               </View> 
               </TouchableOpacity>
               <TouchableOpacity onPress={this.props.EqualsTo}>
               <View style={styles.InputBtn}>
                  <Text style={styles.InputNumberKeys}>=</Text>    
               </View> 
               </TouchableOpacity>
               </View>

            </View>
        );
    }
  }

// class About extends Component {
//   constructor(props){
//      super(props);
//      this.state={}
//   }
//   render() {
//     return(
//       <View style={styles.container3}>
//       <Text>
//          {this.props.AboutUs}
//       </Text>
//       <Text>
//         {this.props.AboutUs1}
//         </Text>
//         <Text>
//         {this.props.AboutUs2}
//         </Text>
//    </View>
//     );
//   }
// }

const styles = StyleSheet.create({
    container:{
        flex:1,
       flexDirection:'column',
       paddingTop:0,
    },
   ResultContainer:{
       width:WIDTH,
       height:HEIGHT/3,
       backgroundColor:'#00BCAE',
       flexDirection:'column',
       alignItems:'flex-end'
   },
   InputContainer:{
       flex:1,
       flexDirection:'row',
       flexWrap:'wrap',
       width:WIDTH,
       height:HEIGHT,
       backgroundColor:'#78DAD2',
       paddingTop:10,
   },

   sideBtn:{
       flex:1,
       flexDirection:'column',
       backgroundColor:'#78DAD2',
       marginTop:-350

   },
  
   InputBtn:{
       width:WIDTH/4,
       height:HEIGHT/8,
       backgroundColor:'#E4E4E4',
       margin:1
   },
   InputBtn1:{
      width:WIDTH/4,
      height:HEIGHT/8,
      backgroundColor:'#E4E4E4',
      margin:1
  },
   InputNumberKeys:{
       fontSize:25,
       fontWeight:'600',
       flexDirection:'column',
       textAlign:'center',
       marginTop:20
   },
   InputNumberKeys1:{
      fontSize:25,
      fontWeight:'600',
      flexDirection:'row',
      textAlign:'center',
      marginTop:20
  },
   ResultText:{
       flex:1,
       color:'#fff',
       fontSize:30,
       fontWeight:'900',

   },
   ResultText2:{
      flex:1,
      color:'#fff',
      fontSize:30,
      fontWeight:'900',
  }
})
export default App;