import React from 'react';
import {Animated, View } from 'react-native';



const Filled = ({ filled }) => {
   const [opacityValue]= React.useState(new Animated.Value(0));
   React.useEffect(()=> {
       filled && Animated.timing(
           opacityValue,
           {
               toValue: 1,
               duration: 500,
           }
       ).start();
   }, [filled]);
   
   return (
    <View 
    style={{position: 'absolute',
        width: '100%',height: '100%',
        backgroundColor: filled === 1 ? 'blue' : 'green',
    }}
        />
    );
}

export default Filled;