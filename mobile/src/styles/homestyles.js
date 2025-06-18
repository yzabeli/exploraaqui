
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#001F3F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainerColumn: {
    marginVertical: 20,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  carousel: {
    backgroundColor: 'white',
    padding: 40,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carouselText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#3B82F6',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 14,
  },
  ctaBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  ctaText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  greenButton: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  greenButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
});
