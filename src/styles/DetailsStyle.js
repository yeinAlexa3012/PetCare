import { COLORS } from './Colors';

export const detailsStyle = {
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 7,
  },
  card: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    width: '90%',
    maxWidth: 400,
  },
  imageContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    elevation: 5,
    borderRadius: 15,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain', 
    marginBottom: 20, 
  },
  titleText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    marginTop: 10,
  },
  infoBox: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 1,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  favoriteBtn: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10,
  },
  favoriteBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonBack: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 20,
    width: 100,
  },
  textButton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
};
