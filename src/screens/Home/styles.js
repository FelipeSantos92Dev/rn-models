import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#121212',
    padding: 20
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#7c5295",
    borderRadius: 5,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    height: 100,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#1f1b24'
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  cardTxt: {
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1f1b24',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#e9e9e9',
  },
  txt: {
    textAlign: 'justify',
    color: '#fff',
    width: 250
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    padding: 10,
    width: 200,
    gap: 15
  },
  icon: {
    margin: 20
  },
  resumo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 300,
    height: 200
  },
  imageResumo: {
    width: 150,
    height: 200,
    borderRadius: 5
  },
  txtResumo: {
    width: 200,
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    color: '#fff',
    margin: 10
  }
});

export default styles;
