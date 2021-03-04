import React from 'react';
import { View } from 'react-native';



const Filled = ({ filled }) => {
    return (
    <View 
    style={{position: 'absolute',
        display: filled ? 'block' : 'none',
        width: '100%',height: '100%',
        backgroundColor: filled === 1 ? 'blue' : 'green',
    }}
        />
    );
}

export default Filled;