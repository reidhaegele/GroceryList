import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ItemAddedNotification = ({
  itemName,
  userName,
  listName,
  imagePath
}) => {
  return (
    <View style={styles.itemAddedNotificationContainer}>
      <View style={styles.itemAddedNotificationUpperHalf}>
        <Image source={imagePath} style={styles.notificationImage}/>
      </View>
      <View style={styles.itemAddedNotificationLowerHalf}>
        <Text>{userName} added {itemName} to {listName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemAddedNotificationContainer: {
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
  itemAddedNotificationUpperHalf: {
    flexDirection: 'row',
    padding: 20,
    flex: 0.5,
    justifyContent: 'space-evenly'
  },
  itemAddedNotificationLowerHalf: {
    padding: 5,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flex: 0.5,
    backgroundColor: "#ffe680",
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

export default ItemAddedNotification;