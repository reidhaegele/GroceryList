import { View, StyleSheet } from 'react-native';


export default function Container({ children }) {
    return (
        <View style={[styles.container, styles.boxShadow]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '46%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10, 
    },
    boxShadow: {
        boxShadowColor: '#171717', 
        boxShadowOffset: { width: -2, height: 4},
        boxShadowOpacity: 0.2,
        boxShadowRadius: 3,
    }
});
