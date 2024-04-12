import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: '#121212'
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#7c5295",
    borderRadius: 5,
  },
  userInput: {
    padding: 8,
    borderBottomWidth: 1,
    margin: 5,
  },
  inputText: {
    color: '#fff',
    backgroundColor: '#1f1b24',
    borderRadius: 5,
    margin: 5,
    width: 250,
    height: 40,
    padding: 8
  },
  buttonTxt: {
    color: '#fff'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  }
});

export default styles;
