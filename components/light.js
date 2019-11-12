import Button from './button'
import Torch from 'react-native-torch';
import React from 'react';
class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightPermissions: null,
     lightToggle: false,
    };
  }

  async componentDidMount() {
    console.log('On mount', this.state);
    this.setState({
      lightPermissions: await Torch.requestCameraPermission(
        'Camera Permissions', // dialog title
        'We require camera permissions to use the torch on the back of your phone.' // dialog body
      )
    })
  }

  lightSwitch = async () =>{
    console.log(this.state);
    this.setState(state => ({ lightToggle: !state.lightToggle }),
      () => {
        let { lightToggle } = this.state;
        console.log('Calling switchState', lightToggle);
        try {
          Torch.switchState(lightToggle);
        } catch (e) {
          console.error(e);
        }
      });
  }
  render(){
    return(
      <>
        <Button
          title="Press me"
          lightToggle = {this.lightSwitch}
        
        />

      </>
    )
  }

}

export default Light;


{/* <Button
title="Press me"
color="#f194ff"
onPress={() => Alert.alert('Button with adjusted color pressed')}
/> */}