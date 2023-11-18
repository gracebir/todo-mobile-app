/** @format */

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ListRenderItem,
    FlatList,
} from "react-native";
import React from "react";
import { styles } from "./style";
import TaskItem, { taskIteProps } from "../TaskItem";
import { taskItems } from "../../assets/data/data";

const TaskList = () => {
    const renderItem: ListRenderItem<taskIteProps> = ({ item }) => (
        <TaskItem
            key={item.id}
            isCompleted={item.isCompleted}
            content={item.content}
        />
    );
    return (
        <View style={styles.container}>
            <View style={styles.taskHeader}>
                <Text style={styles.taskHeaderTitle}>Daily Tasks</Text>
                <TouchableOpacity>
                    <Image
                        style={styles.plusImage}
                        source={require("../../assets/data/plusadd.png")}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    style={{
                        height: 182,
                    }}
                    data={taskItems}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

export default TaskList;
