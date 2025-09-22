import react, {useState} from 'react'; 
import {View, Text,  Button, FlatList, Alert, TextInput} from 'react-native';

type Movies = {
    id: number;
    title: string; 
    year: number;
    author: string;
};

export default function Level2MargeAddingandRemoving() {
    const [movies, setMovies] = useState<Movies[]>([]);
    

    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const addMovies = () => {
        if (!title.trim() || !year.trim() || !author.trim()) {
            Alert.alert(`Please input other fields!`);
            return;
        };

        const newMovie : Movies = {
            id: movies.length + 1,
            title,
            year: Number(year),
            author,
        };
        setMovies([...movies, newMovie]);
        
        setAuthor("");
        setYear("");
        setTitle("");


    };

    const removeMovie = (id: number) => {
        setMovies(movies.filter((movie) => movie.id !== id ));
    };

    return (
        <View>
            <View>
                <TextInput
                placeholder='Type Movie Title'
                value={title}
                onChangeText={setTitle}/>

                <TextInput
                placeholder='Type the Author'
                value={author}
                onChangeText={setAuthor}/>

                <TextInput
                placeholder='Type the year'
                value={year}
                onChangeText={setYear}
                keyboardType='numeric'/>

                <Button 
                title='Click to add Movie'
                onPress={addMovies}/>

                
               
            </View>

            <View>
                <FlatList 
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => (
                    <View> 
                        <Text> {index + 1}. {item.title}, Author: {item.author}, Year: {item.year} </Text>
                        <Button
                        title='Remove Movie'
                        onPress={() =>removeMovie(item.id)}/>
                        </View>
                )}
                ListEmptyComponent={<Text> No Data Yet!</Text>}
                ListHeaderComponent={<Text> List of Movies: </Text>}/>
            </View>
        </View>
    )
}