import { COLORS } from './Colors';

export const styles = {
  header: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  containerScroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 7,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
    marginTop: 5,
  },
  card: {
    width: '85%',
    backgroundColor: '#f9fbf4',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#8eb69b',
    padding: 25,
    alignItems: 'center',
    minHeight: 350,
  },
  tipTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 15,
    textAlign: 'center',
  },
  tipDesc: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 5,
    paddingBottom: 10,
    paddingTop: 10,
    width: 150,
    borderRadius: 25,
    marginTop: 30,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
