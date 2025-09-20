import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SeatCardProps {
  seatNumber: number;
  onSelect: (seatNumber: number) => void;
  isSelected: boolean;
}

const SeatCard = ({ seatNumber, onSelect, isSelected }: SeatCardProps) => {
  return (
    <View style={style.wrapperContainer}>
      <Pressable
        onPress={() => onSelect(seatNumber)}
        style={[
          style.cardContainer,
          { backgroundColor: isSelected ? "red" : "green" },
        ]}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          {seatNumber}
        </Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },

  cardContainer: {
    width: 80,
    aspectRatio: 1 / 1,
    justifyContent: "center",
    borderRadius: 12,
    padding: 12,
  },
});

export default SeatCard;
