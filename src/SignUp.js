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
  const [emailText, setEmailText] = useState("이메일");
  const [passwordText, setPasswordText] = useState("비밀번호");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailFunc = () => {
    setEmailText("");
  };

  const passwordFunc = () => {
    setPasswordText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.AppBar}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backBtnText}>{"<"}</Text>
          </TouchableOpacity>
          <View style={styles.pageTitle}>
            <Text style={styles.title}>회원가입</Text>
          </View>
        </View>

        <View style={styles.emailForm}>
          <Text style={styles.emailText}>{emailText}</Text>
          <TextInput
            style={styles.email}
            onChangeText={setEmail}
            value={email}
            onFocus={emailFunc}
          ></TextInput>
          <View style={styles.emailLine}></View>
        </View>
        <View style={styles.passwordForm}>
          <Text style={styles.passwordText}>{passwordText}</Text>
          <TextInput
            style={styles.password}
            onChangeText={setPassword}
            value={password}
            onFocus={passwordFunc}
          ></TextInput>
          <View style={styles.passwordLine}></View>
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
    top: 8,
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
  emailForm: {
    top: 20,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  emailText: {
    top: 20,
    paddingLeft: 5,
    height: 20,
    color: "#A4A4A4",
    fontSize: 15,
    fontWeight: "bold",
  },
  email: {
    left: 5,
    width: 290,
    height: 20,
  },
  emailLine: {
    top: 10,
    width: 300,
    height: 2,
    backgroundColor: "#D8D8D8",
  },
  passwordForm: {
    top: 20,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  passwordText: {
    top: 20,
    paddingLeft: 5,
    height: 20,
    color: "#A4A4A4",
    fontSize: 15,
    fontWeight: "bold",
  },
  password: {
    left: 5,
    width: 290,
    height: 20,
  },
  passwordLine: {
    top: 10,
    width: 300,
    height: 2,
    backgroundColor: "#D8D8D8",
  },
  checkBtn: {
    top: 50,
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