import { placeholder } from "@babel/types";
import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { TextInput, Button, Checkbox } from "react-native-paper";
import { SocialIcon } from "react-native-elements";

// DÜz fetch değil axios kullan!!!

const getPost = () => {
  return fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((json) => {
      if (json.movies[0].title == "Star Warsss") {
        console.log("var");
      } else {
        console.log("yok");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const Login = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Logo}>
          <Image
            source={{
              uri: "https://hdsotomasyon.com/wp-content/uploads/2018/04/logo-mavi.png",
            }}
            style={{ width: 230, height: 70 }}
          />
        </View>

        <View>
          <TextInput
            style={Platform.OS === "web" ? styles.inputweb : styles.input}
            mode="outlined"
            label="E-mail"
            theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
          />
          <View style={styles.borderStyle}>
            <TextInput
              style={Platform.OS === "web" ? styles.inputweb : styles.input}
              mode="outlined"
              label="Şifre"
              theme={{ roundness: 10, colors: { primary: "#067dc1" } }}
            />
          </View>

          <View
            style={
              Platform.OS === "web"
                ? {
                    alignSelf: "center",
                    width: "40%",
                    flexDirection: "row",
                    alignItems: "center",
                  }
                : {
                    marginLeft: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }
            }
          >
            <TouchableOpacity
              onPress={() => {
                setChecked(!checked);
              }}
            >
              <Checkbox
                color="#067dc1"
                status={checked ? "checked" : "unchecked"}
              />
            </TouchableOpacity>

            <Text>Beni Hatırla</Text>
          </View>

          <View
            style={
              Platform.OS === "web"
                ? styles.GirisYapButtonWeb
                : styles.GirisYapButton
            }
          >
            <Button
              icon="login"
              mode="contained"
              color="#067dc1"
              style={{ height: 50, justifyContent: "center", borderRadius: 10 }} // justifyContent: "center" ortalar.
              contentStyle={{ height: 50, justifyContent: "center" }} // eğer bunu eklemezsen butona tıklayınca tıklama alanın kücük gözükür.
              onPress={getPost}
            >
              Giriş Yap
            </Button>
            <View style={{ alignItems: "center", paddingTop: 20 }}>
              <Text
                style={{
                  justifyContent: "center",
                  color: "#067dc1",
                }}
              >
                Şifremi Unuttum
              </Text>
            </View>
          </View>
        </View>

        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#f0f0f0",
                marginTop: 9,
              }}
            />

            <Text
              style={{
                color: "#067dc1",
                marginTop: 15,
                marginBottom: 5,
                width: 175,
                textAlign: "center",
              }}
            >
              Sosyal Ağ ile Oturum Aç
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#f0f0f0",
                marginTop: 9,
              }}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}></View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <SocialIcon style={{ marginLeft: 10 }} type="facebook" />

            {Platform.OS == "android" ? (
              <SocialIcon style={{ marginLeft: 20 }} type="google" />
            ) : Platform.OS == "ios" ? (
              <SocialIcon
                light
                style={{ marginLeft: 20 }}
                iconColor="#000"
                type="apple"
              />
            ) : (
              <SocialIcon style={{ marginLeft: 20 }} type="google" />
            )}

            <SocialIcon style={{ marginLeft: 20 }} type="instagram" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //  alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  Logo: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom:20,
  },

  input: {
    height: 48,
    marginRight: 27,
    marginLeft: 27,
    padding: 3,
    backgroundColor: "#fff",
  },

  inputweb: {
    height: 50,
    alignSelf: "center",
    width: "40%",
    padding: 7,
    backgroundColor: "#fff",
  },

  GirisYapButton: {
    margin: 5,
    marginRight: 27,
    marginLeft: 27,
    padding: 3,
  },

  GirisYapButtonWeb: {
    margin: 5,
    alignSelf: "center",
    width: "40%",
    padding: 10,
  },

  borderStyle: {
    borderRadius: 25,
    overflow: "hidden",
  },
});
