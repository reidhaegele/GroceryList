import { Text, TextProps } from './Themed';
import { useFonts } from 'expo-font';
export function MonoText(props: TextProps) {
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    'UbuntuRegular': require('@/assets/fonts/Ubuntu-Regular.ttf'),
  });
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
