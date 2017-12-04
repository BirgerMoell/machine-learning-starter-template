import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { StackedAreaChart, AreaChart, ProgressCircle, BarChart, XAxis, YAxis, LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Slider from 'react-native-slider'; // 0.11.0
import { LinearGradient } from 'expo';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Machine Learning',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 0.2,
    };
  }




  render() {
    return (
      <View style={styles.container}>


      <LinearGradient
                colors={['rgba(21, 149, 135,1)', 'rgba(255, 255, 255,1)']}
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

              <View style={{ color: '#fff', backgroundColor: 'transparent', padding: 100 }}>
              <Text style={{ color: '#fff', backgroundColor: 'transparent'}}>The intersection of artificial intelligence and neuroscience is where the magic happens</Text>
              <Text style={{ color: '#fff', backgroundColor: 'transparent', paddingTop: 20}}>How are you feeling?</Text>
              <ProgressCircle
                    style={{ height: 200, paddingTop: 20 }}
                    progress={this.state.value}
                    progressColor="#6DD6BE"
                  />

                  <Slider
                        style={{ width: 100, alignSelf: 'center' }}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                              />
              </View>


      
          <View style={styles.awesomeContainer}>

          
</View>
         

      </View>
    );
  }

}

const styles = StyleSheet.create({
  awesomeContainer: {
    flex: 1,
    // alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
  }
});

const mapStateToProps = (state) => {
  const homeostasis = state.homeostasis;
  console.log('State', ...state);
  console.log('Homeostasis', homeostasis);
  return {
    homeostasis
  };
};


export default connect(mapStateToProps)(HomeScreen);




        {/* <View style={{ justifyContent: 'space-between'}}>

                  <Text style={{ alignSelf: 'center' }}>Energy</Text>

                    <ProgressCircle
                    style={{ height: 100, paddingTop: 20 }}
                    progress={this.state.value}
                    progressColor="#6DD6BE"
                  />

                  <Slider
                        style={{ width: 100, alignSelf: 'center' }}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                              />


                  <Text style={{ alignSelf: 'center' }}>Courage</Text>
                  <ProgressCircle
                            style={{ height: 100, paddingTop: 20 }}
                            progress={this.props.homeostasis[4].Brave}
                            progressColor="#6DD6BE"
                          />

                            <Slider
                                style={{ width: 100, alignSelf: 'center' }}
                                value={this.state.value}
                                onValueChange={value => this.setState({ value })}
                                      />

                    </View>

                  <Text style={{ alignSelf: 'center' }}>Happiness</Text>
          <ProgressCircle
                    style={{ height: 100, paddingTop: 20 }}
                    progress={this.props.homeostasis[0].Energy}
                    progressColor="#6DD6BE"
                  />

          <Slider
                        style={{ width: 100, alignSelf: 'center' }}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                              />

          <Text style={{ alignSelf: 'center' }}>Calm</Text>
          <ProgressCircle
                    style={{ height: 100, paddingTop: 20 }}
                    progress={this.props.homeostasis[0].Energy}
                    progressColor="#6DD6BE"
                  />

          <Slider
                        style={{ width: 100, alignSelf: 'center' }}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                              />

          <Text style={{ alignSelf: 'center' }}>Love</Text>
          <ProgressCircle
                    style={{ height: 100, paddingTop: 20 }}
                    progress={this.props.homeostasis[0].Energy}
                    progressColor="#6DD6BE"
                  />

          <Slider
                        style={{ width: 100, alignSelf: 'center' }}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                              /> */}
