// Import liabrarys to making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText} </Text>
        </View>);
};

const styles = {
    textStyle: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }
};

// Make a component available to other parts 

export default Header;

