import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Video } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import NavigationPlate from '../../components/NavigationPlate';

export default class MovieNavigateComponent extends  React.Component<{}, {}> {
  public static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  private movieItem = () => {
    return(
      <Video
        source={{ uri: 'https://haduki1208-app.firebaseapp.com/tatenaga_4_3.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode='cover'
        shouldPlay
        isLooping
        style={styles.content__movie}
      />
    );
  }

  public render() {
    return(
      <View style={styles.content_wrap}>
        <TouchableOpacity style={styles.header__controller_back_wrap} onPress={()=>alert('hoge')}>
          <Text style={styles.header__controller_back_text}>＜案内終了</Text>
        </TouchableOpacity>
        <View style={styles.content__movie_wrap}>
          {this.movieItem()}
        </View>
        <View style={styles.content__navi}>
          <NavigationPlate
            stationName={'横浜駅'}
            startGateName={'JR/中央改札'}
            endGateName={'相鉄線/2F改札'}
          />
        </View>
      </View>
    );
  }
}


EStyleSheet.build({});

const styles = EStyleSheet.create({
  content_wrap: {
    flex: 1,
    top: 0,
    position: 'relative',
  },
  header__sub_window_circle: {
    width: '8rem',
    height: '8rem',
    borderRadius: '4rem',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 6,
    top: 20,
    elevation: 8,
    backgroundColor: 'skyblue',
  },
  header__controller_back_wrap: {
    width:'40%',
    height: '10%',
    top: '5%',
    justifyContent: 'center',
  },
  header__controller_back_text: {
    fontSize: '1.2rem',
    fontWeight: '600',
    top: 0,
    color: 'white',
  },
  content__movie_wrap: {
    flex: 1,
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    backgroundColor: 'blue',
  },
  content__movie: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: '-8rem',
  },
  content__navi: {
    flex: 0.1,
    padding: 2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    opacity: 0.5,
    backgroundColor: 'black',
  },
});