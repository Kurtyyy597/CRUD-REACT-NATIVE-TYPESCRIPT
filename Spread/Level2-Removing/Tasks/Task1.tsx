import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, FlatList, Image } from 'react-native';

type Movies = { 
  id: number;
  favoriteMovie: string;
  year: number;
  author: string;
};

export default function Level2Task2() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [favoriteMovie, setFavoriteMovie] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [picture, setPicture] = useState<any>(null);
  const [message, setMessage] = useState<string>(
    "These are your Movie Choices: Avatar / Avengers / Batman / Superman / Titanic"
  );

  const addMovie = () => {
    if (!favoriteMovie.trim() || !year.trim() || !author.trim()) {
      Alert.alert(`Please input all fields!`);
      return;
    }

    const newMovie: Movies = {
      id: movies.length + 1,
      favoriteMovie,
      year: Number(year),
      author,
    };

    const pictureMovie = favoriteMovie.toLowerCase();
    if (pictureMovie === "titanic") setPicture(require('../../../img/titanic.jpg'));
    if (pictureMovie === "avengers") setPicture(require('../../../img/avengers.jpg'));
    if (pictureMovie === "batman") setPicture(require('../../../img/batman.jpg'));
    if (pictureMovie === "superman") setPicture(require('../../../img/superman.jpg'));
    if (pictureMovie === "avatar") setPicture(require('../../../img/avatar.jpg'));

    setMovies([...movies, newMovie]);
    setAuthor("");
    setFavoriteMovie("");
    setYear("");
  };

  const removeItem = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Movie Choices:</Text>
      <Text>{message}</Text>

      <TextInput 
        placeholder='Type the title of your favorite Movie'
        value={favoriteMovie}
        onChangeText={setFavoriteMovie}
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      <TextInput
        placeholder='Type the Author'
        value={author}
        onChangeText={setAuthor}
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      <TextInput 
        placeholder='Type year'
        value={year}
        onChangeText={setYear}
        keyboardType='numeric'
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      <Button 
        title='Click to add Favorite Movie'
        onPress={addMovie}
      />

      {picture && (
        <View style={{ marginVertical: 10, alignItems: 'center' }}>
          <Image
            source={picture}
            style={{ height: 100, width: 100 }}
          />
        </View>
      )}

      <FlatList 
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginVertical: 5 }}>
            <Text>
              {index + 1}. {item.favoriteMovie}, Year: {item.year}, Author: {item.author}
            </Text>
            <Button
              title='Remove Movie'
              onPress={() => removeItem(item.id)}
            />
          </View>
        )}
        ItemSeparatorComponent={() => (
          <Text>-----------------------------------------------------------------------------------</Text>
        )}
        ListEmptyComponent={<Text>No Data Yet!</Text>}
        ListHeaderComponent={<Text>Your Favorite Movies!</Text>}
      />
    </View>
  );
}
