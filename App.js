import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './components/Todo';

export default function App() {
  const [todo, setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = () => {
    setTodoItems([...todoItems, todo]);
    setTodo(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...todoItems];
    itemsCopy.splice(index, 1);
    setTodoItems(itemsCopy);

  }





  return (
    <View style={styles.container}>
      <View style={styles.todowrapper}>
        <Text style={styles.sectionTitle}>Todos to do</Text>
        <View style={styles.items}>
{/*här hamnar todo- listan */}
{
todoItems.map((item, index)=> {
  return (
    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
      <Todo text={item}/>
    </TouchableOpacity>
  )
  
  
})}



    {/* <Todo text={'Task 1'} />
    <Todo text={'Task 2'} />
    <Todo text={'Task 3'} /> */}
    
        </View>
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style= {styles.writeTodoWrapper}>
        <TextInput style={styles.input} placeholder={'todo to do'} value={todo} onChangeText={text=> setTodo(text)}></TextInput>

        <TouchableOpacity onPress={()=> handleAddTodo()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        
        </KeyboardAvoidingView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EA',
    },
    todowrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 40,
    },
    writeTodoWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 60,
      borderColor: 'pink',
      borderWidth: 2,
      width: 250,
      marginLeft: 25,
    },
    addWrapper: {
      width: 40,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 100,
      justifyContent:'center',
      alignItems: 'center',
      borderColor: 'pink',
      borderWidth: 2, 
      marginRight: 25,
    },

    addText: {},

});
