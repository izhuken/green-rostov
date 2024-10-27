import { DailyQuestIcon } from "@/assets/svg";
import { EventApprovementModal } from "@/components/task/event-approvement";
import { TaskApprovementModal } from "@/components/task/task-approvement";
import { eventApi, taskApi } from "@/constants/api";
import { Event, pag, Task } from "@/entities";
import { useStoreHook } from "@/hooks/use-store";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDisclosure, useToast } from "react-native-ficus-ui";

export default function HomeScreen() {
  const t = useToast();
  const {
    isOpen: taskIsOpen,
    onClose: taskOnClose,
    onOpen: taskOnOpen
  } = useDisclosure();
  const {
    isOpen: eventIsOpen,
    onClose: eventOnClose,
    onOpen: eventOnOpen
  } = useDisclosure();
  const currentUser = useStoreHook().user;
  const { data: dailyTask } = useQuery({
    queryKey: ["daily-task"],
    queryFn: async () => {
      const currentTask = await axios.get<pag<Task>>(`${taskApi}/get_all`);
      return currentTask.data.data[0];
    }
  });
  const { data: lastEvent } = useQuery({
    queryKey: ["last-event"],
    queryFn: async () => {
      const currentTask = await axios.get<pag<Event>>(`${taskApi}/get_all`);
      return currentTask.data.data[0];
    }
  });
  const { mutate: approveTask } = useMutation({
    mutationFn: async (description: string) => {
      const userId = currentUser.user?.id;
      const taskId = dailyTask?.id;

      return await axios.post(`${taskApi}/task-approvement/create`, {
        user_id: userId,
        task_id: taskId,
        description: description
      });
    },
    onSuccess: () => {
      t.show({
        type: "success",
        text1: "Ваш ответ записан!"
      });
    },
    onError: () => {
      t.show({
        type: "error",
        text1: "Нельзя выполнять одну задачу дважды!"
      });
    }
  });

  const { mutate: approveEvent } = useMutation({
    mutationFn: async (description: string) => {
      const userId = currentUser.user?.id;
      const eventId = lastEvent?.id;

      return await axios.post(`${eventApi}/event-user/create`, {
        user_id: userId,
        event_id: eventId,
        description: description,
        title: description,
        approved: true
      });
    },
    onSuccess: () => {
      t.show({
        type: "success",
        text1: "Ваш ответ записан!"
      });
    },
    onError: (e) => {
      t.show({
        type: "error",
        text1: "Нельзя участвовать в одном событии дважды!"
      });
    }
  });

  return (
    <View style={styles.dataContainer}>
      <View>
        <View>
          <Text style={styles.sectionTitle}>Ежеднеаная задача</Text>
        </View>
        <Pressable style={styles.dailyContentContainer} onPress={taskOnOpen}>
          <DailyQuestIcon />
          <Text style={styles.contentTextStyle}>
            {dailyTask?.title ?? "Загрузка..."}
          </Text>
        </Pressable>
      </View>

      <View>
        <View>
          <Text style={styles.sectionTitle}>Ближайшее событие</Text>
        </View>
        <Pressable style={styles.eventContentContainer} onPress={eventOnOpen}>
          <View style={styles.eventImageContainer}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("@/assets/images/eco-event.png")}
            />
          </View>
          <Text>{lastEvent?.title ?? "Загрузка..."}</Text>
          <Text style={styles.contentTextStyle}>
            {lastEvent?.description ?? "Загрузка..."}
          </Text>
        </Pressable>
      </View>

      <TaskApprovementModal
        isOpen={taskIsOpen}
        onClose={taskOnClose}
        submitter={approveTask}
      />
      <EventApprovementModal
        isOpen={eventIsOpen}
        onClose={eventOnClose}
        submitter={approveEvent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "5%"
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },

  contentTextStyle: {
    fontSize: 12
  },

  eventImageContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },

  dailyContentContainer: {
    borderWidth: 6,
    borderColor: "#b9b9b9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    padding: 10
  },

  eventContentContainer: {
    borderWidth: 6,
    borderColor: "#b9b9b9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: 10
  },

  eventTile: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5
  }
});
