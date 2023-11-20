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
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from "../ButtomSheet/ButtomSheet";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/rootReducer";
import { useGetAllTasksQuery } from "../../slices/task.slice";

const TaskList = () => {
    const { userInfo } = useSelector((state: RootState) => state.auth);
    //@ts-ignore
    const id: number = userInfo?.user?.id;
    const { data: taskLists } = useGetAllTasksQuery(id);
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
                {taskLists?.length ? (
                    <FlatList
                        style={{
                            height: 182,
                        }}
                        data={taskLists}
                        renderItem={renderItem}
                    />
                ) : (
                    <View style={{ alignItems: "center" }}>
                        <Text>You Don't have Tasks</Text>
                    </View>
                )}
            </View>
            <BottomSheet ref={bottomSheetRef} />
        </View>
    );
};

export default TaskList;
