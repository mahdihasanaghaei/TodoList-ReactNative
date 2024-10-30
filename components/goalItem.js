import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //we use this line of code to make pressable work on ios platform
        style={({pressed}) => pressed && styles.pressesItem}
      >
        <Text style={{ color: "white", padding: 8 }}>{props.itemData}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressesItem: {
    opacity: 0.5,
  }
});
