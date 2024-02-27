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
        height: '86%',
        width: '43%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10, 
    },
    boxShadow: {
        shadowColor: '#171717', 
        shadowOffset: { width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});
