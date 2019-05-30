// Import liabrarys to making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component 

const Header = () => {
const { textStyle, viewStyle } = styles;
return (
    <View style={viewStyle}> 
        <Text style={textStyle} >Albums !</Text>
    </View>);
};  

const styles = {
        textStyle: {
            fontSize: 25
        },
        viewStyle: { 
            backgroundColor: '#F8F8F8'
        }
};

// Make a component available to other parts 

export default Header;

