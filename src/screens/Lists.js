import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet} from "react-native";
import ListCard from "../components/listcard/ListCard";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButtons from "../components/header_buttons/HeaderButtons";

const Stack = createNativeStackNavigator();

const List = ({navigation}) => {

        const [lists, setlists] = useState([
            {
                list_id: '1',
                title: 'List A',
                color: '#0085FF',
            },
            {
                list_id: '2',
                title: 'List B',
                color: '#00FFD1',
            },
            {
                list_id: '3',
                title: 'List C',
                color: '#0085FF',
            },
            {
                list_id: '4',
                title: 'List D',
                color: '#00FFD1',
            },
        ])

        React.useEffect(() => {
            navigation.setOptions({
              headerRight: () => (
                <HeaderButtons 
                    buttons={[
                        {
                            icon: <AntDesign name="pluscircleo" size={35} color="gray" />,
                            onpress: () => navigation.navigate('Add List'),
                        },
                    ]}
                />
                ),
            });
        }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={lists}
                renderItem={({item}) => (
                    <ListCard title={item.title} color={item.color}/>
                )}
                style={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      },
  });

export default List;