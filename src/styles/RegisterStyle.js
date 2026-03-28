import { COLORS } from './Colors';

export const registerStyle = {
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
  textStyle: {
    color: COLORS.primary,
    fontSize: 23,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barStyle: {
    color: COLORS.primary,
    elevation: 5,
    backgroundColor: '#fcfcfc',
    width: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 20,
    width: 100,
    marginTop: 10,
  },
  buttonClean: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 20,
    width: 100,
    marginTop: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
};
