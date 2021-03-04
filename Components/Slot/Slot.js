import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Filled from './Filled';

const SlotWrapper = styled(TouchableOpacity)
`width: ${Dimensions.get('window').width * 0.3};
height: ${Dimensions.get('window').width * 0.3};
background-color: grey;
border: 1px solid #fff;`;

const Slot = ({ index, filled, handleOnPress}) => (
    <SlotWrapper onPress={ () => !filled && handleOnPress(index)}>
        <Filled filled={filled}/>
    </SlotWrapper>
);

export default Slot;