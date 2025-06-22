import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, Image as ImageIcon, Smile } from 'lucide-react-native';

export function CreatePostBar() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150' }} 
          style={styles.avatar} 
        />
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputText}>What's on your mind?</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.separator} />
      
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Camera size={20} color="#F02849" />
          <Text style={styles.actionText}>Live</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <ImageIcon size={20} color="#45BD62" />
          <Text style={styles.actionText}>Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Smile size={20} color="#F7B928" />
          <Text style={styles.actionText}>Feeling</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  inputButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E4E6EA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputText: {
    fontSize: 16,
    color: '#65676B',
  },
  separator: {
    height: 1,
    backgroundColor: '#E4E6EA',
    marginVertical: 8,
  },
  actionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#65676B',
    fontWeight: '600',
  },
});