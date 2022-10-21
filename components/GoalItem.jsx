import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 3,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
  },
});
