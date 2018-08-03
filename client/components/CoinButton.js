import React from 'react';
import { connect } from 'react-redux';
import { buyCoin } from '../actions/index';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const mapDispatchToProps = dispatch => {
    return {
        buyCoin: (price, cash, coin) => {
            if (price < cash) {
                return dispatch(buyCoin(coin))
            } else {
                return
            }
          } 
    };
};

const ConnectedCoinButton = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => props.buyCoin(props.price, props.cash, props)}>
 
            <Image 
            source={require(props.icon)}  
            style={styles.icon} 
            />

            {/* <View style={styles.SeparatorLine} /> */}

            <Text>{props.name} Cost:{props.price} Rate:${props.rate}`</Text>

            </TouchableOpacity>
        </View>
    )
}

const CoinButton = connect(null, mapDispatchToProps)(ConnectedCoinButton);

styles = {
    icon: {
        width: 30,
        height: 30,
        justifyContent: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
    }
}

export default CoinButton;
