import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";

interface PaymentMethodCardProps {
  isSelected?: boolean;
  title?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const PaymentMethodCard: FC<PaymentMethodCardProps> = ({
  onPress,
  isSelected = false,
  title,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        {isSelected && (
          <View
            style={{
              position: "absolute",
              top: s(-8),
              right: s(-8),
              backgroundColor: "#ff7622",
              borderWidth: s(2),
              borderColor: "#fff",
              width: s(24),
              height: s(24),
              borderRadius: s(15),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: s(12) }}>✓</Text>
          </View>
        )}
        {icon}
      </View>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: s(85),
  },
  selectedCardStyle: {
    borderWidth: s(2),
    borderColor: "#ff7622",
  },
  card: {
    backgroundColor: "#F0F5FA",
    width: s(85),
    height: s(72),
    borderRadius: s(14),
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: s(14),
    color: "#333",
    textTransform: "capitalize",
    marginTop: s(8),
  },
});
