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
  const [originPasswordText, setOriginPasswordText] = useState("기존 비밀번호");
  const [newPasswordText, setNewPasswordText] = useState("새로운 비밀번호");
  const [checkNewPasswordText, setCheckNewPasswordText] = useState("새로운 비밀번호 확인");
  const [originPassword, setOriginPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");

  const originPasswordFunc = () => {
    setOriginPasswordText("");
  };

  const newPasswordFunc = () => {
    setNewPasswordText("");
  };

  const checkNewPasswordFunc = () => {
    setCheckNewPasswordText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.AppBar}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backBtnText}>{"<"}</Text>
          </TouchableOpacity>
          <View style={styles.pageTitle}>
            <Text style={styles.title}>비밀번호 변경</Text>
          </View>
        </View>

        <View style={styles.originPasswordForm}>
          <Text style={styles.originPasswordText}>{originPasswordText}</Text>
          <TextInput
            style={styles.originPassword}
            onChangeText={setOriginPassword}
            value={originPassword}
            onFocus={originPasswordFunc}
          ></TextInput>
          <View style={styles.originPasswordLine}></View>
        </View>

        <View style={styles.newPasswordForm}>
          <Text style={styles.newPasswordText}>{newPasswordText}</Text>
          <TextInput
            style={styles.newPassword}
            onChangeText={setNewPassword}
            value={newPassword}
            onFocus={newPasswordFunc}
          ></TextInput>
          <View style={styles.newPasswordLine}></View>
        </View>

        <View style={styles.checkNewPasswordForm}>
          <Text style={styles.checkNewPasswordText}>{checkNewPasswordText}</Text>
          <TextInput
            style={styles.checkNewPassword}
            onChangeText={setCheckNewPassword}
            value={checkNewPassword}
            onFocus={checkNewPasswordFunc}
          ></TextInput>
          <View style={styles.checkNewPasswordLine}></View>
        </View>

        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.checkBtnText}>확인</Text>
        </TouchableOpacity>
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
    top: 9,
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
  title: {
    bottom: 20,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  originPasswordForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  originPasswordText: {
    top: 20,
    paddingLeft: 5,
    height: 20,
    color: "#A4A4A4",
    fontSize: 15,
    fontWeight: "bold",
  },
  originPassword: {
    left: 5,
    width: 290,
    height: 20,
  },
  originPasswordLine: {
    top: 10,
    width: 300,
    height: 2,
    backgroundColor: "#D8D8D8",
  },
  newPasswordForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  newPasswordText: {
    top: 20,
    paddingLeft: 5,
    height: 20,
    color: "#A4A4A4",
    fontSize: 15,
    fontWeight: "bold",
  },
  newPassword: {
    left: 5,
    width: 290,
    height: 20,
  },
  newPasswordLine: {
    top: 10,
    width: 300,
    height: 2,
    backgroundColor: "#D8D8D8",
  },
  checkNewPasswordForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  checkNewPasswordText: {
    top: 20,
    paddingLeft: 5,
    height: 20,
    color: "#A4A4A4",
    fontSize: 15,
    fontWeight: "bold",
  },
  checkNewPassword: {
    left: 5,
    width: 290,
    height: 20,
  },
  checkNewPasswordLine: {
    top: 10,
    width: 300,
    height: 2,
    backgroundColor: "#D8D8D8",
  },
  checkBtn: {
    top: 65,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 45,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
  checkBtnText: {
    color: "#BDBDBD",
  },
});

export default Init;