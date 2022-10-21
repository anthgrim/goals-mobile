import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({
  placeholder,
  onInputChange,
  inputValue,
  onPressEvent,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onInputChange}
        value={inputValue}
      />
      <Button title="Add Goal" onPress={onPressEvent} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
