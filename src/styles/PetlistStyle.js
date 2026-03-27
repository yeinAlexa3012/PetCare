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
  flatlistStyle: {
    padding: 15,
    paddingBottom: 70,
  },

  containerFlatlist: {
    paddingTop: 10,
    paddingBottom: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    resizeMode: 'contain',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 5,
  },
  petImages: {
    padding: 15,
  },
  titleText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentText: {
    color: COLORS.secondary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerText: {
    paddingLeft: 30,
  },
};
