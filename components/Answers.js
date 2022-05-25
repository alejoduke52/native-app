import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { RadioButton } from 'react-native-paper';
import Button from './Button'


const Answers = ({answers,nextId}) => {

    // the value its the actual id for each option
    // I used a external radiobutton cause on react native
    // there is no default checkboxes or radioButton
    // https://callstack.github.io/react-native-paper/radio-button.html

    const [value, setValue] = useState(0);


    // here is where I'm saving the actual answers
    // cause you didn't said how I can save it, this
    // was the most fast way haha

    const AnswertoQuestions = [{}]

    // when the active value of the radio button is "checked"
    // that id is used to get the actual answer from the array
    // and after that I've save it with the .push and console
    // logged to see that is working :D
    const saveAnswer = () => {

      AnswertoQuestions.push(answers[value])
      console.log(AnswertoQuestions)


    }

    




  return (

    <View>
        <RadioButton.Group 
        onValueChange={value => {

          setValue(value)
          console.log(value)
          
        }} 
        value={value}>
            {// Here we maps each answer and render the radiobutton
            }
            {answers.map((answer, index) => {
            
            return (
            <View key={index}>

                <RadioButton.Item label={answer} value={index} />

            </View>
            );
        })}


        </RadioButton.Group>
      
        {
          // I created the Button component to style it, manage the CountId
          // and save the actual Answers
        }
        <Button nextId={nextId} saveAnswer={saveAnswer}/>




       



    </View>
  );}
       
            
    

export default Answers

const styles = StyleSheet.create({})