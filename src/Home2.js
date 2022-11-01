import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function Init() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.dustImg}
          source={require("./img/dust_purple.jpg")}
        ></Image>
        <Text style={styles.title}>Todo Monster</Text>
        <Text style={styles.explain}>
          할 일을 계획하고 몬스터를 키워보세요!
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  dustImg: {
    width: 300,
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  explain: {
    top: 10,
    color: "#848484",
  },
  btnContainer: {
    flexDirection: "row",
    top: 160,
  },
  Btn: {
    marginRight: 5,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
  btnText: {
    color: "black",
    fontSize: 14,
  },
});

export default Init;