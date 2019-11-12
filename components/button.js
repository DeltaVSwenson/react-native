
import React from 'react';
import { Button } from 'react-native';

function maButton(props){
  return(
    <Button title="Press me"
    color="#f194ff"
    onPress={props.lightToggle}/>

  )

}
export default maButton;