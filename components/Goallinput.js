import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';


const GoalInput = props => {
    const [enterGoal, setEnterGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enterGoal);
        setEnterGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Wprowasz tekst"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enterGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Anuluj" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Dodaj" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: '70%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button:{
        width:'40%'
    },

});

export default GoalInput;