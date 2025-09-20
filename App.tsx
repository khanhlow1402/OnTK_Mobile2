import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SeatCard from "./components/SeatCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  // Tạo ra 2 mảng
  // Mảng ghế ngồi
  // Mảng ghế đã chọn
  const [seats, setSeats] = useState<number[]>(
    Array.from({ length: 40 }, (_, i) => i + 1)
  );
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  // Chọn ghế
  // Nếu có trong mảng ghế đã chọn thì bỏ chọn
  // Chưa có thêm vào mảng ghế đã chọn
  const handleSelect = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <FlatList
              data={seats}
              keyExtractor={(item) => item.toString()}
              numColumns={4}
              renderItem={({ item }) => {
                const isSelected = selectedSeats.includes(item);

                return (
                  <SeatCard
                    isSelected={isSelected}
                    seatNumber={item}
                    onSelect={handleSelect}
                  />
                );
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
