import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { DummyData } from '../components/mapComponents/DummyData';
import MapViewComponent from '../components/mapComponents/MapViewComponent';
import CarouselComponent, { CarouselCard } from 'react-native-carousel-component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
});

export default class CarouselScreen extends React.Component {
  carousel: any;

  readonly state = {
    indoorLevel: DummyData.indoorLevel,
    initializedLocation: DummyData.initializedLocation,
    movieMarkers: DummyData.movieMarkers,
    guideLines: DummyData.guideLines,
    elevatorMarkers: DummyData.elevatorMarkers,
  };

  private show = () => {
    this.carousel.show();
  }

  private dismiss = () => {
    this.carousel.dismiss();
  }

  private renderCards = () => {
    return (
      <CarouselCard>
        <View>
          <TouchableOpacity onPress={this.dismiss}>
            <Text>sample dismiss</Text>
          </TouchableOpacity>
        </View>
      </CarouselCard>
    );
  }

  render() {
    const {
      indoorLevel, initializedLocation, movieMarkers,
      elevatorMarkers, guideLines,
    } = this.state;

    return (
      <>
        <CarouselComponent
          ref={(carousel: any) => { this.carousel = carousel; }}
          cards={this.renderCards}
          leftItem={{ title: 'CLOSE', layout: 'none', onPress: this.dismiss }}
        >
          <View style={{ flex: 1 }}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
              <View style={{height: 300, width: 300}}>
                <MapViewComponent
                  indoorLevel={indoorLevel}
                  initializedLocation={initializedLocation!}
                  movieMarkers={movieMarkers}
                  elevatorMarkers={elevatorMarkers}
                  guideLines={guideLines}
                  changeIndoorLevel={this.changeIndoorLevel}
                />
              </View>

              <Button title='Open' onPress={this.show} />
            </View>
          </View>
        </CarouselComponent>
      </>

    );
  }

  private changeIndoorLevel = (nextIndoorLevel: string) => {
    const validatedIndoorLevel = nextIndoorLevel.replace(/階/, '');
    const indoorLevel = validatedIndoorLevel.substr(-2);
    this.setState({ indoorLevel });
  }
}
