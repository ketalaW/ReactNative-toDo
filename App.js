import React, { useState } from 'react';
import GoalItem from './components/Goallitem' ;
import GoalInput from './components/Goallinput';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native'; 

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddmode, setIsAddMode] = useState(false);

  const ModeHandler =   () => setIsAddMode(true); 

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle} ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals( 
      currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId );
      });
      setIsAddMode(false);
  }
 
  return (
    <View style={styles.screen}>
      <Button title="Dodaj nowy cel" onPress={ ModeHandler} />
      <GoalInput visible={isAddmode} onAddGoal = {addGoalHandler} onCancel={cancelGoalAdditionHandler}/>

      <FlatList 
      keyExtractor= {(item,index) => item.id}
      data= {courseGoals}  
       renderItem = { itemData =>(
        <GoalItem  onDelete={removeGoalHandler} id={itemData.item.id} title = {itemData.item.value}/>
      )} />

{/* {courseGoals.map(Goal => (
          <View key={Goal} style={styles.singlist}>
            <Text> {Goal} </Text>
          </View>
        ))} */}



    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 50,
  },



});
