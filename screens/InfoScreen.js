import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { fetchFights } from "../services/api";

const InfoScreen = () => {
  const formatDate = useCallback((dateString) => {
    const [year, month, day] = dateString.split("-");
    return new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
      dateStyle: "long",
    });
  });

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [fights, setFights] = useState([]);

  const soco = { uri: "https://i.imgur.com/bmvRLJr.png" };
  const MMA = { uri: "https://i.imgur.com/wRDdZpf.png" };

  const handleDayPress = useCallback(async (date) => {
    setSelectedDate(date.dateString);
    setFights((await fetchFights(date.dateString)) || []);
  });

  useEffect(() => {
    const getFights = async () => {
      setFights((await fetchFights(selectedDate)) || []);
    };

    getFights();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={soco} style={styles.image} />
      <Image source={MMA} style={styles.logo} />
      <Text style={styles.title}>Datas das Lutas</Text>

      <Calendar
        onDayPress={handleDayPress}
        theme={{
          backgroundColor: "#f8f8f8",
          calendarBackground: "#f8f8f8",
        }}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "gray" },
        }}
      />

      <Text style={styles.fightsTitle}>
        Lutas no dia {formatDate(selectedDate)}
      </Text>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        style={styles.flatList}
        data={fights}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerCard}>
            <View style={styles.cardFight}>
              <View style={styles.cardInfo}>
                <Image
                  style={styles.image}
                  source={{ uri: item.fighters.first.logo }}
                />
                <Text>{item.fighters.first.name}</Text>
              </View>

              <Text style={{ fontWeight: "bold", fontSize: "40" }}>VS.</Text>

              <View style={styles.cardInfo}>
                <Image
                  style={styles.image}
                  source={{ uri: item.fighters.second.logo }}
                />
                <Text>{item.fighters.second.name}</Text>
              </View>
            </View>

            <Text style={{ color: "gray", fontWeight: "bold" }}>
              {item.category}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardFight: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  cardInfo: {
    width: "30%",
    alignItems: "center",
  },
  flatListContainer: {
    alignItems: "center",
  },
  flatList: {
    width: "100%",
  },
  containerCard: {
    width: "90%",
    height: "150px",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 80,
    height: 64,
    marginBottom: 10,
  },
  logo: {
    width: 81,
    height: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fighterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  fighterName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fighterDetails: {
    fontSize: 18,
    color: "gray",
  },
  noFighterText: {
    fontSize: 18,
    color: "gray",
    marginTop: 20,
  },
  fightsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  fightItem: {
    fontSize: 18,
    color: "#333",
    paddingVertical: 5,
  },
});

export default InfoScreen;
