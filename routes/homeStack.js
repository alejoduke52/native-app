import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NavigationContainer } from '@react-navigation/native';
import Home from '../components/Screens/Home'
import Survey from '../components/Screens/Survey'
import Completed from '../components/Screens/Completed'
import Header from '../components/Header'
import React from 'react'

const Stack = createNativeStackNavigator();

const homeStack = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator>

            {
                //The default header of the Stack Navigator its replaced
                // with the Header component
            }
            <Stack.Screen
            
            name='Home'
            component={Home}
            options={{
                headerTitle: () => <Header/>
                
                }}

            
            />

            <Stack.Screen
            
            name='Survey'
            component={Survey}
            options={{
                headerTitle: () => <Header/>,
                headerBackVisible:false
                }}
            />

            {

                // On the screen completed, the headerShown is false like the given Screen
            }
            <Stack.Screen
            
            name='Completed'
            component={Completed}
            options={{

                headerShown: false,


            }}
            />
            
            
            



            </Stack.Navigator>



        </NavigationContainer>



    )



}



export default homeStack;