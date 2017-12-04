import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Constants, Accelerometer, LinearGradient } from 'expo';


export default class ReinforcementLearningScreen extends React.Component {
  static navigationOptions = {
    title: 'Reinforcement learning',
  };

  state = {
    accelerometerData: { x: 0, y: 0, z: 0 },
    locationResult: null
  };

  componentWillUnmount() {
    this._unsubscribeFromAccelerometer();
  }

  componentDidMount() {
    this._subscribeToAccelerometer();
    this._getLocationAsync();
  }

  _subscribeToAccelerometer = () => {
    this._acceleroMeterSubscription = Accelerometer.addListener(accelerometerData =>
      this.setState({ accelerometerData })
    );
  };

  _unsubscribeFromAccelerometer = () => {
    this._acceleroMeterSubscription && this._acceleroMeterSubscription.remove();
    this._acceleroMeterSubscription = null;
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }
 
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
  };
 


  render() {
    return (
      <View style={styles.container}>

     
<LinearGradient
          colors={['rgba(108,152,142,1)', 'rgba(202, 8, 20,1)']}
          start={[0.45, 0.45]}
          end={[1, 1]}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
           
              </LinearGradient>

         

          <Text style={{ color: '#fff', backgroundColor: 'transparent', padding: 100 }}>
          
          Life is a Markov chain.
          Accelerometer:
          x = {this.state.accelerometerData.x.toFixed(2)}{', '}
          y = {this.state.accelerometerData.y.toFixed(2)}{', '}
          z = {this.state.accelerometerData.z.toFixed(2)}

          {/* Location: {this.state.locationResult} */}
       
        </Text>


      


      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      width: '100%',
      flex: 1,
      justifyContent: 'space-between',
  },
});
