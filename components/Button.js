import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({nextId,saveAnswer}) => {

  return (

    // this Button is only a TouchableOpacity styled like a button
    // and on Pressed trigger the next question with the next Answers
    // and save the active answer on radiobutton
    
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {

            saveAnswer()
            nextId()

        }}>

            <Text style={styles.buttonText}>Submit</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({

    button: {

        backgroundColor: '#11d1ab',
        borderRadius: 25,
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      buttonText:{
        textAlign: 'center',
        color: 'white',

      },
      container:{


        paddingTop:30
      }


})