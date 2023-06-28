import { TouchableOpacity, Button, StyleSheet, SafeAreaView, FlatList, Text, View } from "react-native";
import { useState } from "react";
import { useEffect } from "react";



// const DATA = [
//     // {
//     //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     //   title: 'Städa',
//     // },
//     // {
//     //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     //   title: 'Diska',
//     // },
//     // {
//     //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     //   title: 'Tvätta',
//     // },
//   ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function HomeScreen({ navigation, route }) {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Add")} title="Add" color="black" />
      ),
    });
  }, [navigation]);
  useEffect(() => {
    if (route.params?.todo) {
      console.log("new todo: ", route.params?.todo);
      const todo = {
        title: route.params?.todo.text,
        id: Date.now(),
      };
      setTodos((prev) => [...prev, todo]);
    }
  }, [route.params?.todo]);
  //A ny
  useEffect(() => {
    if (route?.params?.deleteId) {
      // const newTodos = todos.filter((item) => item.id !== id);
    }
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != route?.params?.deleteId);
    });
  }, [route?.params?.deleteId]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail", {
                title: item.title,
                id: item.id,
              });
            }}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    padding: 10,
  },
  header: { fontSize: 20, padding: 10 },
  title: {}


});
  