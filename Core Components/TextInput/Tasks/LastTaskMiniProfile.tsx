import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

export default function LastTaskMiniProfile() {
    const [programming, setProgramming] = useState<string>("");
    const [hobby, setHobby] = useState<string>("");

    return (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={require("../../../assets/Img/Kurty.jpg")}
                    style={styles.profileImage}
                />
                <Text style={styles.nameText}>Kurt Allen A. Marquez</Text>
                <Text style={styles.descriptionText}>
                    I am a driven individual who enjoys both mental and physical challenges. My passion for <Text style={styles.boldText}>programming</Text> shows my logical problem-solving skills, and my dedication to working out and playing basketball highlights my commitment to fitness and teamwork.
                </Text>
            </View>

            {/* Programming Language Input */}
            <View style={styles.inputSection}>
                <TextInput
                    placeholder='Type your programming language'
                    value={programming}
                    onChangeText={setProgramming}
                    style={styles.input}
                />
                <Text>Your programming language is: {programming}</Text>
            </View>

            {/* Hobby Input */}
            <View style={styles.inputSection}>
                <TextInput
                    placeholder='Type your favorite hobby'
                    value={hobby}
                    onChangeText={setHobby}
                    style={styles.input}
                />
                <Text>Your favorite hobby is: {hobby}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        textAlign: 'center',
        lineHeight: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    inputSection: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 5,
        borderRadius: 5,
    },
});
