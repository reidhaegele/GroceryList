import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const PriceChangeNotification = ({
  itemName,
  oldPrice,
  newPrice,
  listName,
  imagePath
}) => {
  return (
    <View style={styles.priceChangeNotificationContainer}>
      <View style={styles.priceChangeNotificationUpperHalf}>
        <Image source={imagePath} style={styles.notificationImage}/>
        <View style={styles.columnSpacingContainer}>
          <Text>Old Price: </Text>
          <Text>{oldPrice}</Text>
        </View>
        <View style={styles.columnSpacingContainer}>
          <Text>New Price:</Text>
          <Text>{newPrice}</Text>
        </View>
      </View>
      <View style={styles.priceChangeNotificationLowerHalf}>
        <Text>Your item, {itemName} on {listName}, has changed price!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceChangeNotificationContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 10,
    minHeight: 125,
    maxHeight: 160,
    width: "90%",
    borderColor: 'black',
    borderRadius: 20,
  },
  priceChangeNotificationUpperHalf: {
    flexDirection: 'row',
    padding: 20,
    flex: 0.5,
    justifyContent: 'space-evenly'
  },
  priceChangeNotificationLowerHalf: {
    padding: 5,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flex: 0.5,
    backgroundColor: "#B9F891",
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnSpacingContainer: {
    justifyContent: 'space-around',
  },
  notificationImage: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  }

});

export default PriceChangeNotification;