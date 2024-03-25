import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
const img0 = require("../img/book1.png");
const img1 = require("../img/book2.png");
const img2 = require("../img/book3.png");
const img3 = require("../img/book4.png");
const img4 = require("../img/book5.png");
const img5 = require("../img/book6.png");

const imgs = [img0, img1, img2, img3, img4, img5];

const BookDetail = props => {
    let { book } = props;
    return (
        <View style={styles.cardstyle}>
            <Pressable>
                <Image style={styles.imgstyle} source={imgs[book.image]} />
            </Pressable>
            <Text style={styles.titlestyle}>{book.bookname}</Text>
            <Text style={styles.writerstyle}>{book.writer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardstyle: {
        width: 140,
        height: 256,
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
        lineHeight: 14
    }
})

export default BookDetail;