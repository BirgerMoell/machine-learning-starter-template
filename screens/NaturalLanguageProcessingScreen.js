import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

export default class NaturalLanguageProcessingScreen extends React.Component {
  static navigationOptions = {
    title: 'Natural language processing',
  };

  constructor(props) {
    super(props);
    this.state = { text: 'Hello words!' };
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View style={styles.container}>

<LinearGradient
          colors={['rgba(108,152,142,1)', 'rgba(23, 135, 251,1)']}
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

              <View style={{ color: '#fff', backgroundColor: 'transparent', padding: 50 }}>
              <Text style={{ color: '#fff', backgroundColor: 'transparent' }}>Words contain meaning that are interpreted by the underlying cognitive models that shape our actions and thoughts.</Text>
        
              <TextInput
                style={{height: 40, borderColor: '#fff', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />

              <TouchableOpacity>
                <Text style={{ color: '#fff', backgroundColor: 'transparent' }}>We should figure out how text works in the human mind</Text>
              </TouchableOpacity>

        </View>
      

      </View>
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
