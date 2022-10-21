import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList } from "react-native";

export default function App() {
  const [targetValue, setTargetValue] = useState("");
  const [goalList, setGoalList] = useState([]);

  const inputHandler = (enteredText) => setTargetValue(enteredText);

  const addHandler = () => {
    if (targetValue.trim() === "") return alert("Please add a goal");
    setGoalList((prev) => [
      ...prev,
      { text: targetValue, id: Math.random().toString() },
    ]);
    setTargetValue("");
  };

  const renderGoal = (itemValue) => {
    return <GoalItem itemData={itemValue} />;
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        placeholder="Your course goal!"
        onInputChange={inputHandler}
        inputValue={targetValue}
        buttonTitle="Add Goal"
        onPressEvent={addHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => renderGoal(itemData)}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 5,
  },

  goalsContainer: {
    flex: 5,
  },
});
