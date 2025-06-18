import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { padding: 20, backgroundColor: '#001F3F', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  cardContainerColumn: { marginTop: 20 },
  cardRow: { flexDirection: 'row', backgroundColor: '#334155', padding: 20, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  cardText: { color: 'white', fontWeight: 'bold' },
  carousel: { backgroundColor: 'white', padding: 40, margin: 20, borderRadius: 10, alignItems: 'center' },
  carouselText: { fontWeight: 'bold', fontSize: 16 },
  greenButton: { backgroundColor: '#10B981', padding: 15, borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  greenButtonText: { color: 'white', fontWeight: 'bold' },
  blueButton: { backgroundColor: '#3B82F6', padding: 15, borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  linkText: { color: '#3B82F6', textAlign: 'center', marginVertical: 15 },
  ctaBox: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center', marginVertical: 20 },
  ctaText: { marginBottom: 10, fontWeight: 'bold' },
  input: { backgroundColor: '#1e293b', borderRadius: 10, padding: 15, marginVertical: 8, borderWidth: 1, borderColor: '#ccc', color: '#fff' },
  bottomMenu: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, borderTopWidth: 1, borderColor: '#ccc' },

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  
  cardContainerColumn: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 15,
  },
  
  inputCard: {
    backgroundColor: '#334155',
    color: '#A7F3D0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  
});
