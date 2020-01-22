import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';

export default function App() {
  let [selectedImage, setSelectedImage] = useState(null);

  // set Image
  let openImagePickerAsync = async () => {
    let permissonResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissonResult.granted === false) {
      alert('Permisson to accese camera roll is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };

  //sharing
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        `The image is available for sharing at :${selectedImage.remoteUri}`
      );
      // alert("Uh oh, sharing isn't available on your platform");
      return;
    }
    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
        style={styles.logo}
      />
      <Text style={styles.instruction}>
        Open up App.tsx to start working on your app!
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 305,
    height: 159
  },
  instruction: {
    color: '#888',
    fontSize: 30
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
