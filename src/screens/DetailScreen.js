import { View, Text, Image, StyleSheet, Pressable, Image} from "react-native";
import React from "react";
import filled from "../../icon/icon_star_filled.png"
import empty from "../../icon/icon_star_empty.png"

const img0 = require("../img/book1.png");
const img1 = require("../img/book2.png");
const img2 = require("../img/book3.png");
const img3 = require("../img/book4.png");
const img4 = require("../img/book5.png");
const img5 = require("../img/book6.png");

const imgs = [img0, img1, img2, img3, img4, img5];

const DetailScreen = ({ route }) => {
  const filledstar = Array.from({ length: route.params.stars })
  const emptystar = Array.from({ length: 5 - route.params.stars })
  
  return (
    <View style={styles.container}>
      <Image style={styles.picStyle} source={imgs[route.params.image]} />
      <View style={{alignItems: 'center'}}>

        <Text style={styles.booknameStyle}>{route.params.bookname}</Text>
        <Text style={styles.writerStyle}>{route.params.writer}</Text>
        
        <View style={styles.liststyle}>
          {filledstar.map((_, index) => (
            <Image key={index} style={styles.starstyle} source={filled} />
          ))}
          {emptystar.map((_, index) => (
            <Image key={index} style={styles.starstyle} source={empty} />
          ))}
          <Text style={styles.textStyle}>{route.params.stars}.0</Text>
          <Text style={styles.ScoreStyle}>/ 5.0</Text>
        </View>
      </View>

      <View style={{marginTop: 15, marginBottom: 30}}>
        <Text style={{fontSize: 14, lineHeight: 24, fontWeight: '400'}}>{route.params.intro}</Text>
      </View>

      <Pressable>
        <View style={styles.buttonstyle}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: '500', letterSpacing: 1}}>BUY NOW FOR $46.99</Text>
        </View>
      </Pressable>

    <View style={styles.pagepart}>
        <Pressable style={styles.pagebutton}>
          <Image source={require("../../icon/icon_home_actived.png")} />
          <Text style={styles.activate}>Home</Text>
        </Pressable>

        <Pressable style={styles.pagebutton}>
          <Image source={require("../../icon/icon_nav_bookmark.png")} />
          <Text style={styles.noact}>Wishlist</Text>
        </Pressable>

        <Pressable style={styles.pagebutton}>
          <Image source={require("../../icon/icon_mybook.png")} />
          <Text style={styles.noact}>My books</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15 
  },
  textStyle: {
    fontSize: 14,
    marginTop: 8,
    marginLeft: 5
  },
  ScoreStyle: {
    fontSize: 14,
    marginTop: 8,
    opacity: 0.7
  },
  booknameStyle: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '500',
    marginTop: 10
  },
  writerStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: "#666",
    marginTop: 8
  },
  flatstyle: {
    marginHorizontal: 10,
    marginTop: 20
  },
  picStyle: {
    width: 210,
    height: 300,
    marginBottom: 20
  },
  pagepart: {
    height: 56,
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginTop: '41%',
    elevation: 1,
    zIndex: 2
  },
  pagebutton: {
    alignItems: 'center',
  },
  activate: {
    color: '#6200EE'
  },
  noact: {
    color: '#666666'
  },
  buttonstyle: {
    backgroundColor: '#6200EE',
    width: 190,
    height: 36,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  starstyle: {
    marginTop: 10,
  },
  liststyle: {
    flexDirection: 'row',
    gap: 3
  }
});

export default DetailScreen;