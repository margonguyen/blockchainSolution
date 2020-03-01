import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { TextField,FlatList } from "react-native";
import { Card } from "react-native-elements";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DoneIcon from '@material-ui/icons/Done';
import StepIndicator from 'react-native-step-indicator';
import CompleteFlatList from 'react-native-complete-flatlist';

const labels = ["Approval","Shipping","Storing","Packaging","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const data = [
  {
    title: "Farmer",
    body: "San Jose Farm"
  },
  {
    title: "Quantiy:",
    body:"20"
  },
  {
    title: "Condition",
    body:"good"
  },
  {
    title: "Date",
    body:"11/11/2020"
  },
  {
    title: "Expiration date",
    body:"12/12/2020"
  },
  {
    title: "Blockchain verified",
    body: "yes"
  }
];


export default class header extends Component {
  constructor() {
    super();
    this.state = {
        currentPosition: 0,
        data: data

    }
}
onStepPress = position => {
  this.setState({ currentPosition: position })
  // this.viewPager.setPage(position)
}

onPageChange(position){
  this.setState({currentPosition: position});
}

cell(data) {
  return <Text>{data.name}</Text>;
}
  render() {

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://media.mercola.com/assets/images/foodfacts/dragon-fruit-nutrition-facts.jpg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
          
            </View>
          </View >
        <View style={styles.stepIndicator} >
        <StepIndicator
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         onPress={this.onStepPress}

         labels={labels}
    />
    </View>
    <FlatList
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={rowData.title}
              containerStyle={{ padding: 0, flex: 0 }}
            >
           <Text style={styles.description}>{rowData.body}</Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});