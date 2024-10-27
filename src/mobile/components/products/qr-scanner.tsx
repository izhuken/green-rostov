import { CameraView } from "expo-camera";
import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

interface QrScannerProps {
  handler: (data: string) => unknown;
}

export const QrScanner: React.FC<QrScannerProps> = ({ handler }) => {
  const camera = useRef<CameraView | null>(null);

  return (
    <View style={styles.barcodeContainer}>
      <Text style={styles.barcodeTitle}>Отсканируйте чек</Text>
      <CameraView
        ref={camera}
        style={{ height: 300, borderColor: "#fff", borderWidth: 2 }}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"]
        }}
        onBarcodeScanned={({ data }) => {
          camera.current?.stopRecording();
          handler(data);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barcodeContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000",
    padding: 50,
    paddingTop: 20,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center"
  },

  barcodeTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  }
});
