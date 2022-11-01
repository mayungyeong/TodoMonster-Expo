import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

function Init() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.AppBar}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backBtnText}>{"<"}</Text>
          </TouchableOpacity>
          <View style={styles.pageTitle}>
            <Text style={styles.titleText}>카테고리</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>{"+"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryForm}>
          <View style={styles.catetorySqu}>
            <Text style={styles.category}>일반</Text>
          </View>
          <TouchableOpacity style={styles.detailBtn}>
            <Text style={styles.detailBtnText}>{">"}</Text>
          </TouchableOpacity>
          <View style={styles.categoryLine}></View>
        </View>

        <View style={styles.categoryForm}>
          <View style={styles.catetorySqu}>
            <Text style={styles.category}>전체공개</Text>
          </View>
          <TouchableOpacity style={styles.detailBtn}>
            <Text style={styles.detailBtnText}>{">"}</Text>
          </TouchableOpacity>
          <View style={styles.categoryLine}></View>
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  AppBar: {
    marginTop: 60,
    justifyContent: "center",
    width: 330,
    height: 40,
  },
  backBtn: {
    top: 28,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  backBtnText: {
    fontSize: 16,
  },
  pageTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  addBtn: {
    bottom: 28,
    left: 290,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  addBtnText: {
    fontSize: 20,
  },
  categoryForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  catetorySqu:{
    left: 5,
    bottom: 5,
    width: 65,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
  category: {
    color: "#1C1C1C",
    fontSize: 14,
    fontWeight: "bold",
  },
  detailBtn: {
    left: 70,
    bottom: 30,
    width: 225,
  },
  detailBtnText: {
    left: 210,
    width: 225,
    height: 20,
    fontSize: 15,
    color: '#848484',
  },
  categoryLine: {
    bottom: 16,
    width: 300,
    height: 1,
    backgroundColor: "#D8D8D8",
  },
});

export default Init;
