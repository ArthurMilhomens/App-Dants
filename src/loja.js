import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import fruits from "../assets/fruits.jpg";
import aiai from "../assets/aiai.jpg";
import logo from "../assets/logo.png";
import giphy from "../assets/giphy.gif";

// import { Container } from './styles';

export default class Loja extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: <View />
  });
  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.pay}
            onPress={() => Alert.alert("Deus abençoe")}
          >
            <Text>Rappi pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saldo}
            onPress={() => Alert.alert("Deus abençoe")}
          >
            <Text style={{ fontSize: 15, color: "#bfbfbf", right: 20 }}>
              SALDO ATUAL
            </Text>
            <Text style={{ right: 20 }}>R$ 0</Text>
            <Icon
              name="angle-right"
              size={15}
              style={{ position: "absolute", right: 3, top: 15 }}
            />
          </TouchableOpacity>
          <View style={styles.backImage}>
            <Image source={logo} style={styles.imagem} />
          </View>
        </View>
        <View style={styles.backCards}>
          <Image source={fruits} style={styles.imageLeft} />
          <Image source={aiai} style={styles.imageRigth} />
        </View>
        {/* <View>
          <FlatList 
            data={[
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
              {key: 'Homen de Ferro'},
              {key: 'Jamal'},
            ]}
            renderItem={({item}) => <Text style={{fontSize:30}}>{item.key}</Text>}/>
        </View> */}
        <View style={{ alignItems: "center" }}>
          <Image source={giphy} style={styles.gif} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f4f4f4",
    height: "100%"
  },
  card: {
    borderColor: "#d3d3d3",
    marginLeft: "3%",
    marginRight: "3%",
    marginTop: 25,
    marginBottom: 25,
    height: 50,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  backImage: {
    backgroundColor: "#fff",
    width: 68,
    height: 68,
    position: "absolute",
    top: -9,
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    elevation: 3
  },
  imagem: {
    width: 60,
    height: 60
  },
  backCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 130
  },
  imageLeft: {
    width: "45%",
    height: "100%",
    borderRadius: 15,
    marginLeft: "3%"
  },
  imageRigth: {
    width: "45%",
    height: "100%",
    borderRadius: 15,
    marginRight: "3%"
  },
  pay: {
    position: "absolute",
    left: 10,
    top: 13
  },
  saldo: {
    position: "absolute",
    right: 0,
    top: 2
  },
  gif: {
    width: 250,
    height: 250,
    justifyContent: "center",
    resizeMode: "contain"
  }
});
