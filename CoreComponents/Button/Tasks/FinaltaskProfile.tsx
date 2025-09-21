import React, {useState} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';

export default function FinalTaskProfileButton() {
    const name = "Kurt Allen A. Marquez";
    const age = 21;
    const [hobby, setHobby] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [crush, setCrush] = useState<string>("");

    return (
        <View style={styles.container}>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={require(".//../../../assets/Img/Kurty.jpg")}
                    style={styles.profileImage}/>
                <Text style={styles.nameText}>Hello I am {name}</Text>
                <Text style={styles.descriptionText}>
                    I am {age} years old. I'm the only son of my family and my dream is to become a programmer someday.
                </Text>
            </View>

            {/* User Input Section */}
            <View style={styles.inputSection}>
                <TextInput
                    placeholder='Type your Crush Name'
                    value={crush}
                    onChangeText={setCrush}
                    style={styles.input}/>
                <TextInput
                    placeholder='What is your favorite hobby?'
                    value={hobby}
                    onChangeText={setHobby}
                    style={styles.input}/>
            </View>

            {/* Counter Section */}
            <View style={styles.counterSection}>
                <Text style={styles.sectionTitle}>Counter Section:</Text>
                <View style={styles.buttonRow}>
                    <Button
                        title='Increase'
                        onPress={() => setCount(count + 1)}/>
                    <Button
                        title='Decrease'
                        onPress={() => setCount(count > 0 ? count -1 : 0)}/>
                    <Button
                        title='Reset'
                        onPress={() => setCount(0)}/>
                </View>
                <Text style={styles.counterText}>Current Count: {count}</Text>
            </View>

            {/* Preview Section */}
            <View style={styles.previewSection}>
                <Text style={styles.sectionTitle}>Preview:</Text>
                <Text>Your favorite hobby is: {hobby}</Text>
                <Text>Your Crush is: {crush}</Text>
                <Text>You count: {count}</Text>
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
        marginBottom: 5,
    },
    descriptionText: {
        textAlign: 'center',
        lineHeight: 20,
    },
    inputSection: {
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    counterSection: {
        marginBottom: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    counterText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    previewSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
});
