import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { padding: 20, backgroundColor: '#001F3F', alignItems: 'center' },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  cardContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  card: { backgroundColor: '#334155', padding: 20, borderRadius: 10 },
  cardText: { color: 'white', fontWeight: 'bold' },
  carousel: { backgroundColor: 'white', padding: 40, margin: 20, borderRadius: 10, alignItems: 'center' },
  carouselText: { fontWeight: 'bold', fontSize: 16 },
  greenButton: { backgroundColor: '#10B981', padding: 15, borderRadius: 10, alignItems: 'center', margin: 20 },
  blueButton: { backgroundColor: '#3B82F6', padding: 15, borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  input: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginVertical: 8, borderWidth: 1, borderColor: '#ccc' },
  profileCard: { alignItems: 'center', padding: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' },
  profileName: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
  profileInfo: { padding: 20 },
  infoLabel: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  button: { padding: 12, borderRadius: 8, alignItems: 'center' },
  profileInfo: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    gap: 10,
    marginBottom: 20
  },
  infoLabel: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500'
  },
  greenButton: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  greenButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
  
});
