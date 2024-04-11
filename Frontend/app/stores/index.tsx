import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableWithoutFeedback, Modal, TouchableOpacity } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";

export default function Page() {
    const { isDarkMode } = useTheme();
    const [showImageModal1, setShowImageModal1] = useState(false);
    const [showImageModal2, setShowImageModal2] = useState(false);
    const [showImageModal3, setShowImageModal3] = useState(false);

    const handleBoxPress1 = () => {
        setShowImageModal1(true);
    };

    const handleBoxPress2 = () => {
        setShowImageModal2(true);
    };

    const handleBoxPress3 = () => {
        setShowImageModal3(true);
    };

    const closeModal1 = () => {
        setShowImageModal1(false);
    };

    const closeModal2 = () => {
        setShowImageModal2(false);
    };

    const closeModal3 = () => {
        setShowImageModal3(false);
    };

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <TouchableWithoutFeedback onPress={handleBoxPress1}>
                <View style={styles.boxContainer}> 
                    <Text style={styles.label}>Kroger - Rolla, MO</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleBoxPress2}>
                <View style={styles.boxContainer}> 
                    <Text style={styles.label}>Kroger - Troy, MO</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleBoxPress3}>
                <View style={styles.boxContainer}> 
                    <Text style={styles.label}>Kroger - Poplar Bluff, MO</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={showImageModal1} transparent={false} onRequestClose={closeModal1}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={closeModal1}>
                    <Image source={require("@/assets/images/kroger-rolla.jpg")} style={styles.modalImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Store ID: 1234</Text>
                        <Text style={styles.text}>Address: 605 W 4th St, Rolla, MO</Text>
                        <Text style={styles.text}>Zipcode: 65401</Text>
                    </View>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal1}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
            <Modal visible={showImageModal2} transparent={false} onRequestClose={closeModal2}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={closeModal2}>
                    <Image source={require("@/assets/images/kroger-troy.jpg")} style={styles.modalImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Store ID: 5678</Text>
                        <Text style={styles.text}>Address: 1 Troy Sq, Troy, MO</Text>
                        <Text style={styles.text}>Zipcode: 63379</Text>
                    </View>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal2}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
            <Modal visible={showImageModal3} transparent={false} onRequestClose={closeModal3}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={closeModal3}>
                    <Image source={require("@/assets/images/kroger-poplar.jpeg")} style={styles.modalImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Store ID: 9101</Text>
                        <Text style={styles.text}>Address: 2770 N Westwood Blvd, Poplar Bluff, MO</Text>
                        <Text style={styles.text}>Zipcode: 63901</Text>
                    </View>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal3}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", // Default light background color
    },
    darkContainer: {
        backgroundColor: "#353535", // Dark background color
    },
    textContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "left",
        color: "black", // Default text color
    },
    darkText: {
        color: "white", // Dark text color
    },
    boxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", // Center horizontally
        backgroundColor: "#e0e0e0",
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    imageContainer: {
        alignItems: "center",
    },
    label: {
        fontSize: 20,
        textAlign: "center", // Center text within the box
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        color: "white",
        fontWeight: "bold"
    },
    background: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 300,
        height: 100,
        resizeMode: "contain", // Adjust the image's containment style
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalImage: {
        width: 350,
        height: 350,
        resizeMode: "contain",
    },
    closeButton: {
        marginTop: 40,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 16,
        color: "black",
    },
});