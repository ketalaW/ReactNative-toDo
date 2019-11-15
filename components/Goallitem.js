import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.singlist}>
                <Text> {props.title} </Text>
            </View> 
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    singlist: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        marginVertical: 10,
        borderWidth: 1
    },
});
export default GoalItem;