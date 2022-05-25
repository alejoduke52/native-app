import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import completedImage from '../../assets/welcome.png'
const Completed = () => {
  
  // this only render the image and the text Thank You
  
  
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>


        <Image 
        
        style={styles.image}
        source={completedImage}/>
      </View>
      
      <Text style={styles.text}>¡Thank You so much!</Text>
    </View>
  )
}

export default Completed

const styles = StyleSheet.create({

  container: {


    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingBottom:30


  },
  text: {

    fontSize:30,
    fontWeight: 'bold',

  }



})