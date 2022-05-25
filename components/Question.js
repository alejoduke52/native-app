import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Answers from './Answers'
 
const Question = ({Questions, countId, nextId}) => {


  return (
    
    //get the questions from the state on the Questions component
    // render here the primary question, the secondary
    
    <View 
    style={styles.questionContainer}
    key={Questions.id}>
       
      <Text>{Questions[countId].question}</Text>
      <Text>{Questions[countId].secondary}</Text>
      
      
        {
              // and send the answers to the Answers component to do all the
              // stuff like save it

              <Answers answers={Questions[countId].options} nextId={nextId}/>     






        }
      


    </View>
  )



}
 

export default Question

const styles = StyleSheet.create({

  questionContainer:{

    paddingTop: 10


  }
    
})