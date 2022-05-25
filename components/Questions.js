import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'


import ProgressBar from './ProgressBar'
import Question from './Question'

// I've just try to fetch the Json from the local files but react native didn't allowed me
// so my solution was upload to github and with the link, I've only have to send a get request

const url = 'https://raw.githubusercontent.com/alejoduke52/covidForm/main/covid-19.json'

const Questions = ({navigation}) => {
  

    const [covidQuestions, setCovidQuestions] = useState([{}])
    const [loading, setLoading] = useState(true)
    const [countId,setCountId] = useState(0)


    useEffect(() => {

        // on render get the data from the Json
        getData()
        
        
       
      },[])

      
    const getData = () =>{

      // do a get request on the url of the Json
      // the response is converted to json and
      // after returning the data, it is saved to
      // covidQuestions and sets the Loading to false
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setCovidQuestions(data)
        setLoading(false)
      
      })

    
    }

    const nextId = () => {

      // this function is send to the button, when you click on the button
      // the count increments, after the questionnaire render the 7 questions
      // the button send the user to the completed screen
      countId < 6 ? setCountId(countId+1) : navigation.navigate('Completed')


    }

  return (
    <View style={styles.container}>
      { // if its loading only shows a text LOADING
        loading ? (
          <>
          
          <Text style={styles.loading}>LOADING</Text>
          
          {//If its not loading, render all the content
          }
          </>
        ) : (
          <>

            <ProgressBar style={styles.progressBar} step={countId + 1} steps={7} />

            <Question Questions={covidQuestions} countId={countId} nextId={nextId} navigation={navigation}/>

          </>
        )

        //jsx
      }
    </View>
  );
}


export default Questions

const styles = StyleSheet.create({


  loading: {

    fontSize: 40

  },
  container: {

    width: "100%",
    paddingLeft:25,
    paddingRight:25,

  }
  

  }
)
