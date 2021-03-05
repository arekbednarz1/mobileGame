import React from 'react';
import {Animated, Easing } from 'react-native';



const Filled = ({ filled }) => {
   const [opacityValue]= React.useState(new Animated.Value(0));
   const [scaleValue] = React.useState(new Animated.Value(0));
   React.useEffect(()=> {
       filled && Animated.parallel([
           Animated.timing(
           opacityValue,
           {
               toValue: 1,
               duration: 500,
               easing :Easing.linear(),
           }
       ),
       Animated.spring(
           scaleValue,
           {
               toValue:1,
               easing: Easing.cubic(),
           },
       ),
        ]).start();

   }, [filled]);
   
   return (
    <Animated.View 
    style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: filled === 1 ? 'blue' : 'green',
        opacity: opacityValue,
        transform: [
            {
                scale: scaleValue
            }
        ],
    }}
        />
    );
}

export default Filled;