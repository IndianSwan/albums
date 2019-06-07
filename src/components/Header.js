    
// Import liabraries to create components

import React from 'react';
import { Text, View } from 'react-native';

// Create Component 
const Header = (props) => {
   const { textStyle, viewStyle } = styles;
   return (
      <View style={viewStyle}>
          <Text style={textStyle}> {props.headerText} </Text>
      </View>
   );
};
    

const styles = {

   viewStyle:
   {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
      
   }, 

   textStyle:
   {
      fontSize: 20,
      alignItems: 'center',

   }
};

// Make component available to other parts of app 
export default Header;
