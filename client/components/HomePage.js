import React from 'react';

import { connect } from 'react-redux';
import CoinButton from './CoinButton';
import { updateCash } from '../actions/index.js';
import { StyleSheet, Text, View } from 'react-native';

const mapStateToProps = state => {
    return { blockData: state.blockData, cash: state.cash, rate: state.rate, icon: state.icon};
  };
  const mapDispatchToProps = dispatch => {
    return {
      updateCash: () => dispatch(updateCash())
    };
  };
  
  class ConnectedHomePage extends React.Component {
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {
        setInterval(this.props.updateCash, 500);
    }
  
    render() {
        return (
            <View style={styles.container}>
                {this.props.blockData.map(coin => <CoinButton name={coin.name} price={coin.price} rate={coin.rate} cash={this.props.cash} icon={this.props.icon}/>)}
                <Text>${Math.floor(this.props.cash)}</Text>
                <Text>+${this.props.rate}</Text>
            </View>
        )
    }
  }
  
  const HomePage = connect(mapStateToProps, mapDispatchToProps)(ConnectedHomePage);

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
