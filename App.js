import { StyleSheet, View } from 'react-native';
import HomeTabs from "./src/components/navigation/AppNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddList from './src/screens/AddList';
import { useFonts } from 'expo-font';
import UbuntuRegular from './src/assets/fonts/Ubuntu-Regular.ttf';

const Stack = createNativeStackNavigator();

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Ubuntu_400Regular': UbuntuRegular,
  });

  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{

            }}
          >
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false}} />
            <Stack.Screen name="Add List"
              component={AddList}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: "normal",              
                },
                headerStyle: {
                    backgroundColor: "#f2f2f2",
                    height: 120,
                    justifyContent: 'flex-end',
                },
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Helvetica",
  },
});
