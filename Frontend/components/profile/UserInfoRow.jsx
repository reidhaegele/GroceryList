import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from "@/components/navigation/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";

export const UserInfoRow = ({iconName, infoTypeText, rowText}) => {
  
  const { isDarkMode } = useTheme();

  return ( 
    <>
      <View style={styles.userInfoRowContainer}>
        <View>
          <Text style={[styles.userInfoRowTitle, isDarkMode && styles.darkText]}>{infoTypeText}</Text>
        </View>
        <View style={styles.inline}>
          <FontAwesome name={iconName} size={24} color="grey" />
          <Text style={[styles.userInfoRowText, isDarkMode && styles.darkText]}>{rowText}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  userInfoRowContainer: {
    flexDirection: "column",
    alignItems: "start",
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
  },
  userInfoRowTitle: {
      fontSize: 25,
      fontWeight: 600,
      paddingBottom: 8,
  },
  userInfoRowText: {
      fontSize: 20,
      marginLeft: 15,
      alignSelf: 'center',
  },
  darkText: {
    color: "white", // Dark text color
  },
  inline: {
    display: "inline",
  },
  hr: {
  borderTop: 3,
  color: "black",
  overflow: "visible",
  alignSelf: "start",
  height: 1,
  width: "100%",
  }
});