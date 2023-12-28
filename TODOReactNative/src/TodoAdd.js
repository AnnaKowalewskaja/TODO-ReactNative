import React, { useState } from "react"
import { Text, Button, FlatList, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';
import { HintText } from "./HintText";
import { Task } from "./Task";


export const TodoAdd = (props) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [showHint, setShowHint] = useState(false);
    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { id: Date.now().toString(), text: task }]);
            setTask('');
        } else {
            setShowHint(true);
            setTimeout(() => {
                setShowHint(false)
            }, 4000)
        }
    }

    const handleDeleteTask = (idTask) => {
        setTasks(tasks.filter(task => task.id !== idTask))
    }
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder='Write you Todo'
                value={task}
                onChangeText={(text) => setTask(text)}
                multiline={false}
                numberOfLines={1}
            />

            {showHint && <HintText />}
            <Button title="Add Todo" onPress={handleAddTask} style={styles.addButton}/>


            <FlatList data={tasks}
                style={styles.tasksList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Task id={item.id} text={item.text} handleDeleteTask={handleDeleteTask} />
                )}
                numColumns={2}>

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1fafd',
        width: '100%',
    },

    input: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 10,
        fontSize: 20,
    },
    tasksList: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    addButton:{
        marginBottom:20,
        backgroundColor:'none',
        border:'none',
        
    }

});
