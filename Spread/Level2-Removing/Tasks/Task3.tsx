import React, {useState} from 'react';
import {View, Text, Button, TextInput, ActivityIndicator, Switch, Alert, Image, FlatList} from 'react-native';

type Books = {
    id: number;
    name: string;
    author: string;
    year: number;
    read: boolean;
};

export default function Levell2Task3() {
    const [books, setBooks] = useState<Books[]>([]);
    const [name, setName] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [picture, setPicture] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [read, setUnread] = useState<boolean>(false);

    const addBooks = () => {
        if (!name.trim() || !author.trim() || !year.trim()) {
            Alert.alert('Please input other fields!');
            return;
        };
        setLoading(true)
        
        
        setTimeout(() => {
            setLoading(false);
            const newBook : Books = {
                id: books.length+1,
                name,
                year: Number(year),
                author,
                read: false
            };
            

            const pictureBook = name.trim().toLowerCase();
            if(pictureBook === "pride and prejudice") setPicture(require('../../../img/Pride.jpg'));
            if(pictureBook === "frankenstein") setPicture(require('../../../img/frank.jpg'));
            if(pictureBook === "moby-dick") setPicture(require('../../../img/moby.jpg'));
            if(pictureBook === "a tale of two cities") setPicture(require('../../../img/tale.jpg'));
            if(pictureBook === "alice's adventures in wonderland") setPicture(require('../../../img/alice.jpg'));
            if(pictureBook === "adventures of huckleberry finn") setPicture(require('../../../img/huckleberry.jpg'));
            if(pictureBook === "dracula") setPicture(require('../../../img/dracula.jpg'));
            if(pictureBook === "the great gatsby") setPicture (require('../../../img/gatsby.jpg'));
            if(pictureBook === "the hobbit") setPicture (require('../../../img/hobbit.jpg'));
            if(pictureBook === "nineteen eighty-four") setPicture(require('../../../img/nineteen.jpg'));
            if(pictureBook === "the catcher in the rye") setPicture (require('../../../img/eye.jpg'));
            setBooks([...books, newBook]);
            Alert.alert(`You added ${name} to the Books!`);
            
            setAuthor("");
            setYear("");
        }, 5000);
    };

    const removeItem = (id: number) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <View>
            <View>
                <TextInput placeholder='Type the name of the Book' value={name} onChangeText={setName}/>
                <TextInput placeholder='Type year' value={year} onChangeText={setYear} keyboardType='numeric'/>
                <TextInput placeholder='Type the Author' value={author} onChangeText={setAuthor}/>
                
            </View>
            {!loading && <Button title='Click to add Book' onPress={addBooks}/>}

            {loading &&  (
                <View>
                    <ActivityIndicator size={'large'} color={'blue'}/>
                    <Text> adding book.... </Text>
                    </View>
            )}

            <Text> total Books Added: {books.length} </Text>
            

            {!loading && (
                <View> 
                
                {picture && (
                    <Image source={picture} style={{width: 100, height: 100}}/>
                )}
              
                </View>
            )}


            {!loading && (
                <FlatList 
                data={books}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text> No Data Yet </Text>}
                ListHeaderComponent={<Text> Your Book's Collection </Text>}
                ItemSeparatorComponent={() => <Text> --------------------------------------------------------------------------- </Text>}
                renderItem={({item, index}) => (
                    <View>
                        <Text> {index + 1}. Title: {item.name}, Author: {item.author}, Year: {item.year} </Text>
                        <Button title='Click this to remove this book' onPress={() => removeItem(item.id)}/>
                        <Text> Did you read this book? {read? "YES" : "NO"} </Text>
                        <Switch value={read} onValueChange={() => setUnread(!read)}/>
                        
                        </View>
                )}/>
                
            )}

            
            

            </View>
    )
}
          
    