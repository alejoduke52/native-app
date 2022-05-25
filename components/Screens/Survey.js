import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import questionImage from '../../assets/QuestionList.png'
import Questions from "../Questions"


const Form = ({navigation}) => {
  
    return (


    // the survey only renders the Image, the title and 
    // the Questions component, that is the primary 
    //component of all the app
    <View style={styles.container}>
        
        
        <Image
        style={styles.image}
        source={questionImage}
        />
       
        <Text style={styles.title}>Covid Questionnarie</Text>
        
        
        <Questions navigation={navigation}/>


       

    

    </View>
  )
}

export default Form

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    }
    
    ,
    title:{

        fontWeight:'bold',

    }
    

})