import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";

function Init() {
  const [nameText, setNameText] = useState("이름 입력");
  const [selfIntroText, setSelfIntroText] = useState("자기소개 입력");
  const [name, setName] = useState("");
  const [selfIntro, setSelfIntro] = useState("");

  const nameFunc = () => {
    setNameText("");
  };

  const selfIntroFunc = () => {
    setSelfIntroText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.AppBar}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backBtnText}>{"<"}</Text>
          </TouchableOpacity>
          <View style={styles.pageTitle}>
            <Text style={styles.titleText}>프로필</Text>
          </View>
          <TouchableOpacity style={styles.checkBtn}>
            <Text style={styles.checkBtnText}>확인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileForm}>
          <TouchableOpacity style={styles.profileImg}>
            <Image style={styles.dustImg} source={require("./img/dust_pink.jpg")}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.nameForm}>
          <Text style={styles.nameTitle}>이름</Text>
          <Text style={styles.nameText}>{nameText}</Text>
          <TextInput
            style={styles.name}
            onChangeText={setName}
            value={name}
            onFocus={nameFunc}
          ></TextInput>
          <View style={styles.nameLine}></View>
        </View>

        <View style={styles.selfIntroForm}>
          <Text style={styles.selfIntroTitle}>자기소개</Text>
          <Text style={styles.selfIntroText}>{selfIntroText}</Text>
          <TextInput
            style={styles.selfIntro}
            onChangeText={setSelfIntro}
            value={selfIntro}
            onFocus={selfIntroFunc}
          ></TextInput>
          <View style={styles.selfIntroLine}></View>
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
  checkBtn: {
    bottom: 28,
    left: 290,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  checkBtnText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  profileForm:{
    top: 20
  },
  profileImg:{

  },
  dustImg:{
    width: 150,
    height: 150,
  },
  nameForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  nameTitle: {
    paddingLeft: 5,
    color: "#1C1C1C",
    fontSize: 14,
    fontWeight: "bold",
  },
  nameText: {
    left: 70,
    bottom: 15,
    width: 225,
    color: "#848484",
  },
  name: {
    bottom: 30,
    left: 70,
    width: 225,
    height: 20,
  },
  nameLine: {
    bottom: 20,
    width: 300,
    height: 1,
    backgroundColor: "#D8D8D8",
  },
  selfIntroForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  selfIntroTitle: {
    paddingLeft: 5,
    color: "#1C1C1C",
    fontSize: 14,
    fontWeight: "bold",
  },
  selfIntroText: {
    left: 70,
    bottom: 15,
    width: 225,
    color: "#848484",
  },
  selfIntro: {
    bottom: 30,
    left: 70,
    width: 225,
    height: 20,
  },
  selfIntroLine: {
    bottom: 20,
    width: 300,
    height: 1,
    backgroundColor: "#D8D8D8",
  },
});

export default Init;