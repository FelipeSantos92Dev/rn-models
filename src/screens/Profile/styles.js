import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#121212',
    padding: 12,
  },
  avatar: {
    margin: 20,
    gap: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1f1b24',
    padding: 20,
    borderRadius: 5
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500'
  },
  subTitle: {
    color: '#808080',
    fontSize: 15,
    fontWeight: '400'
  },
  sobreMim: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    backgroundColor: '#1f1b24',
    margin: 10,
    padding: 25,
    borderRadius: 5
  },
  sobreTxt: {
    fontSize: 15,
    color: '#fff'
  },
  tech: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  techsTitle: {
    color: '#7c5295',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 25
  },
  projectsTitle: {
    color: '#7c5295',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30
  },
  videoBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20
  },
  video: {
    width: 320,
    height: 300,
    marginRight: 20
  },
});

export default styles;
