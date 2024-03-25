import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import filled from "../../icon/icon_star_filled.png"
import empty from "../../icon/icon_star_empty.png"


const img0 = require("../img/book1.png");
const img1 = require("../img/book2.png");
const img2 = require("../img/book3.png");
const img3 = require("../img/book4.png");
const img4 = require("../img/book5.png");
const img5 = require("../img/book6.png");

const imgs = [img0, img1, img2, img3, img4, img5];

const NewestDetail = ({ props , navigation }) => {
    const filledstar = Array.from({ length: props.stars })
    const emptystar = Array.from({ length: 5 - props.stars })
    return (
        <View style={styles.cardstyle}>
            <Pressable
                onPress={() => navigation.navigate('Detail', props)}
            >
                <Image style={styles.imgstyle} source={imgs[props.image]} />
            </Pressable>
            <View style={styles.liststyle}>
                {filledstar.map((_, index) => (
                    <Image key={index} style={styles.starstyle} source={filled} />
                ))}
                {emptystar.map((_, index) => (
                    <Image key={index} style={styles.starstyle} source={empty} />
                ))}
            </View>
            <Text style={styles.titlestyle}>{props.bookname}</Text>
            <Text style={styles.writerstyle}>{props.writer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardstyle: {
        width: 140,
        height: 278,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    imgstyle: {
        width: 140,
        height: 200
    },
    titlestyle: {
        marginTop: 7,
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '500'
    },
    writerstyle: {
        fontSize: 12,
        opacity: 0.5,
        lineHeight: 14,
        marginTop: 7
    },
    starstyle: {
        marginTop: 15,
    },
    liststyle: {
        flexDirection: 'row',
        gap: 3
    }
})

export default NewestDetail;