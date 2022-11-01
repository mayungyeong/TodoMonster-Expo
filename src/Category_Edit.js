import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Alert 
} from "react-native";

function Init() {
  const [categoryText, setCategoryText] = useState("카테고리명 입력");
  const [category, setCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const categoryFunc = () => {
    setCategoryText("");
  };

  const categoryDelete = () =>
  Alert.alert(
    "Delete",
    "카테고리를 삭제하시겠습니까?",
    [
      { 
        text: "네", 
        onPress: () => {},
        style: "destructive" 
      },
      {
        text: "아니오",
        onPress: () => {},
        style: "cancel"
      },

    ],
  );

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
          <TouchableOpacity style={styles.checkBtn}>
            <Text style={styles.checkBtnText}>확인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryForm}>
          <Text style={styles.categoryText}>{categoryText}</Text>
          <TextInput
            style={styles.category}
            onChangeText={setCategory}
            value={category}
            onFocus={categoryFunc}
          ></TextInput>
          <View style={styles.categoryLine}></View>
        </View>

        <View style={styles.privacyTypeForm}>
          <Text style={styles.privacyType}>공개설정</Text>
          <TouchableOpacity
            style={styles.privacyTypeBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.privacyTypeText}>나만보기 ▼</Text>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalForm}>
                  <Text style={styles.modalTitle}>공개설정</Text>

                  <View style={styles.modalPrivacyTypeForm}>
                    <Text style={styles.modalPrivacyType}>나만보기</Text>
                    <View style={styles.modalPrivatyLine}></View>
                  </View>
                  <View style={styles.modalPrivacyTypeForm}>
                    <Text style={styles.modalPrivacyType}>일부공개</Text>
                    <View style={styles.modalPrivatyLine}></View>
                  </View>
                  <View style={styles.modalPrivacyTypeForm}>
                    <Text style={styles.modalPrivacyType}>전체공개</Text>
                    <View style={styles.modalPrivatyLine}></View>
                  </View>

                  <TouchableOpacity
                    style={styles.modalCheckBtn}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.modalCheckBtnText}>확인</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <View style={styles.privacyTypeLine}></View>
        </View>

        <TouchableOpacity style={styles.deleteBtn} onPress={categoryDelete}>
          <Text style={styles.deleteBtnText}>삭제</Text>
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
  categoryForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  categoryText: {
    bottom: 6,
    paddingLeft: 5,
    height: 20,
    color: "#A4A4A4",
    fontSize: 15,
    fontWeight: "bold",
  },
  category: {
    bottom: 25,
    paddingLeft: 5,
    height: 20,
    color: "#1C1C1C",
    fontSize: 15,
    fontWeight: "bold",
  },
  categoryLine: {
    bottom: 16,
    width: 300,
    height: 2,
    backgroundColor: "#424242",
  },
  privacyTypeForm: {
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  privacyType: {
    bottom: 5,
    paddingLeft: 5,
    height: 20,
    color: "#1C1C1C",
    fontSize: 15,
    fontWeight: "bold",
  },
  privacyTypeBtn: {
    left: 70,
    bottom: 26,
    width: 225,
  },
  privacyTypeText: {
    left: 155,
    width: 225,
    height: 20,
    fontSize: 15,
    color: "#1C1C1C",
  },
  privacyTypeLine: {
    bottom: 16,
    width: 300,
    height: 1,
    backgroundColor: "#D8D8D8",
  },
  modalContainer: {
    flex: 1,
    top: 300,
    alignItems: "center",
  },
  modalForm: {
    alignItems: 'center',
    width: 330,
    height: 330,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 5,
  },
  modalTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },

  modalPrivacyTypeForm:{
    top: 40,
    justifyContent: "center",
    width: 300,
    height: 60,
  },
  modalPrivacyType:{
    bottom: 20,
    paddingLeft: 5,
    height: 20,
    color: "#1C1C1C",
    fontSize: 15,
    fontWeight: "bold",
  },
  modalPrivatyLine:{
    bottom: 16,
    width: 300,
    height: 1,
    backgroundColor: "#D8D8D8",
  },

  modalCheckBtn: {
    top: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 45,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
  modalCheckBtnText: {
    fontWeight: "bold",
  },
  deleteBtn:{
    top: 500,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 45,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
  deleteBtnText:{
    color: 'red',
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Init;