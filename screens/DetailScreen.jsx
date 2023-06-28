
import { Button,  StyleSheet, Text, View } from "react-native";


function DetailsScreen({ navigation, route }) {
  //ny inlägg
  const { title, id } = route.params;
  // useEffect(() => {
  //   navigation.setOptions({ title: title }, [route]);
  // });
  return (
    <View style={styles.container}>
      
      <Text>{title}</Text>
      
      <Button
        
        title="Klar"
        onPress={() => {
        navigation.navigate("Home", { deleteId: id });
        }}
      />
    </View>
  );
}
export default DetailsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
    },

  });
  