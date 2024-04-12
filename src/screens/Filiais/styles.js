import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#121212',
    padding: 20
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#1f1b24',
    borderRadius: 10,
    width: 250,
    marginTop: 30
  },
  userDetailButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
  },
  userName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#7c5295",
    minWidth: 70,
    alignItems: "center",
  },
  nome: {
    color: '#fff'
  },
  title: {
    color: '#fff'
  }
});

export default styles;
