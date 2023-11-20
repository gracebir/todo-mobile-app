/** @format */

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ListRenderItem,
    FlatList,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./style";
import TaskItem, { taskIteProps } from "../TaskItem";
import { taskItems } from "../../assets/data/data";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from "../ButtomSheet/ButtomSheet";

const TaskList = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModal = () => {
        bottomSheetRef.current?.present();
    };
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
                <TouchableOpacity onPress={openModal}>
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
            <BottomSheet ref={bottomSheetRef} />
        </View>
    );
};

export default TaskList;
