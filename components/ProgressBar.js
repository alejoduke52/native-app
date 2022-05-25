import { StyleSheet, Text, View , Animated} from 'react-native'
import React, {useState, useEffect, useRef} from 'react'

const ProgressBar = ({step, steps}) => {

  //this progressBar is only an animation that when the countId
  // increments, the bar does an animation progress
  
  const animation = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  
  
  const [width, setWidth] = useState(0)
  
  
  useEffect(()=>{

    Animated.timing(animation,{ 
    
      toValue: reactive,
      duration: 300,
      useNativeDriver: true
    
    }).start();


  }, [])

  useEffect(()=>{

    reactive.setValue(-width + width * step /steps)

  }, [step, width])



  return (
    <>
      <Text style={{}}>
        {step}/{steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height: 10,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: 25,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height: 10,
            width: "100%",
            borderRadius: 25,
            backgroundColor: "#11d1ab",
            position: "absolute",
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animation,
              },
            ],
          }}
        />
      </View>
    </>
  );
}

export default ProgressBar

const styles = StyleSheet.create({

 




})