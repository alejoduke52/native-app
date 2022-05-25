import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Link } from '@react-navigation/native';
import React from 'react'
import goBack from '../assets/back.png'
import avatar from '../assets/Avatar.png'

const Header = () => {
  
    // The header its only 2 icons, the back button Link
    // you to the Home Page, the avatar icon doesnt do anything
  
    return (
    <View style={styles.header}>

        <TouchableOpacity
       style={styles.backIcon}
        >
            <Link 
            style={styles.backLink}
            to={{ screen: 'Home',  }}>
                <Image 
                style={styles.iconback}
                source={goBack}
                />
            </Link>
            
        </TouchableOpacity>
        

        <TouchableOpacity
       style={styles.avatarIcon}
        >
            <Image 
            style={styles.iconavatar}
            source={avatar}
            />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({


    header:{
        flex: 1,
        justifyContent: 'space-between',
        width:'100%',
        height:75,
        flexDirection:'row',
        alignItems:'center',

    },
    backIcon:{
        
        width:25,
        height:25,
        borderRadius: 10,
        backgroundColor: '#EEF0F1',

    },
    
    iconback:{
                
    },
    avatarIcon:{
        width:25,
        height:25,
        borderRadius: 10,
        backgroundColor: '#EEF0F1',
        marginRight:35

    },
    iconavatar:{

        
        width:20, 
        height: 20,

       

    },
    backLink:{

        padding: 0,
        margin:0,

    }

})