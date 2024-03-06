import { StyleSheet } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useTheme } from '@/components/navigation/ThemeContext';

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, isDarkMode && styles.darkContinaer]}>
            <Text style={styles.sectionTitle}>Home</Text>
            <ScrollView contentContainerStyle={styles.notificationsContainer}>
            </ScrollView>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 30, 
    fontWeight: "bold", 
    marginBottom: 10,
    paddingLeft: 15, 
    textAlign: "left",
    borderBottomColor: 'black'
  },
  notificationsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }, 
  darkText: {
    color: "white", // Dark text color
  },
  darkContinaer: {
    backgroundColor: "#353535",
  },
});
