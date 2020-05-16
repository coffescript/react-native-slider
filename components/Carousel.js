import React, { Component } from 'react'
import { View, Dimensions, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import { Rating, AirbnbRating } from 'react-native-elements'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-looped-carousel'

const { width, height } = Dimensions.get('window')

export default class CarouselComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            size: { width, height }
        }
    }

    image = [{
        id: 1,
        img: require('../assets/images/capturing-the-human-heart-TrhLCn1abMU-unsplash.jpg'),
    },
    {
        id: 2,
        img: require('../assets/images/palmeras_2.jpg'),
    },
    {
        id: 3,
        img: require('../assets/images/palmeras.jpg'),
    },
    {
        id: 4,
        img: require('../assets/images/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg'),
    }]

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }


    render() {
        return (
            <View style={styles.viewBody} onLayout={this._onLayoutDidChange}>
                <Carousel
                    delay={1200}
                    style={this.state.size}
                    autoplay
                    swipe

                >
                    {this.image.map(image => {
                        return <ImageBackground source={image.img} style={[styles.ImageBackground, this.state.size]}
                            key={image.img}>
                            <View style={styles.viewScreen}>

                                <View style={styles.textAboutPromotion}>
                                    <Text style={styles.textAbout}>
                                        es simplemente el texto de relleno de las imprentas y archivos de texto.
                                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                                    </Text>
                                </View>
                            </View>
                            <Button style={styles.button}>
                                <Text style={{color: '#000'}}>Price Now!</Text>
                                <Icon
                                    ios="ios-arrow-back"
                                    android="md-arrow-back"
                                    style={{color: '#000'}}
                                />
                            </Button>
                        </ImageBackground>
                    })
                    }
                </Carousel>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1
    },
    ImageBackground: {

    },
    viewScreen: {
        flex: 1
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignItems: 'center',
        alignContent: 'center'
    },
    textAboutPromotion: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        bottom: '30%'
    },
    textAbout: {
        color: '#FFF',
        marginRight: '10%',
        textAlign: 'left',
        marginLeft: '8%',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: 13,
        top: 35
    },
    button: {
        backgroundColor: '#FFF',
        width: '70%',
        bottom: '10%',
        alignSelf: 'center',
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        borderRadius: 20
    },
    textButton: {
        alignContent: 'center',
        textAlign: 'center',
    }
})