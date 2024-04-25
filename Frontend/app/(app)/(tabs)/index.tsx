import { StyleSheet } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';
import { View } from '@/components/Themed';
import { useTheme } from '@/components/navigation/ThemeContext';
import Colors from '@/constants/Colors';
import PriceChangeNotification from "@/components/home/PriceChangeNotification";
import ItemAddedNotification from "@/components/home/ItemAddedNotification";
export default function Home() {
  const { isDarkMode } = useTheme();

  return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, {backgroundColor:  Colors[isDarkMode?"dark":"light"].background}]}>
            <ScrollView contentContainerStyle={styles.notificationsContainer}>
            </ScrollView>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
