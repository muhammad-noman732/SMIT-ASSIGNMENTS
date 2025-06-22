import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Plus } from 'lucide-react-native';

export function StoryCarousel() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=6')
      .then(res => res.json())
      .then(data => {
        const users = data.users.map((user: any) => ({
          id: user.id.toString(),
          name: user.firstName,
          avatar: user.image,
          hasStory: true,
        }));
        setStories([
          {
            id: 'create',
            type: 'create',
            name: 'Create Story',
            avatar: users[0]?.avatar || '',
          },
          ...users
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator style={{margin: 16}} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {stories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyContainer}>
            {story.type === 'create' ? (
              <View style={styles.createStoryContainer}>
                <Image source={{ uri: story.avatar }} style={styles.createStoryImage} />
                <View style={styles.createStoryOverlay}>
                  <View style={styles.createStoryButton}>
                    <Plus size={20} color="#1877F2" />
                  </View>
                  <Text style={styles.createStoryText}>{'Create\nStory'}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.storyItem}>
                <View style={[styles.storyBorder, story.hasStory && styles.storyBorderActive]}>
                  <Image source={{ uri: story.avatar }} style={styles.storyAvatar} />
                </View>
                <Text style={styles.storyName}>{story.name}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  scrollContent: {
    paddingHorizontal: 12,
    gap: 8,
  },
  storyContainer: {
    alignItems: 'center',
  },
  createStoryContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    overflow: 'hidden',
    position: 'relative',
  },
  createStoryImage: {
    width: '100%',
    height: '70%',
  },
  createStoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 4,
  },
  createStoryButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E7F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  createStoryText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#1C1E21',
    textAlign: 'center',
    marginTop: 4,
  },
  storyItem: {
    alignItems: 'center',
  },
  storyBorder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyBorderActive: {
    backgroundColor: '#1877F2',
  },
  storyAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  storyName: {
    fontSize: 12,
    color: '#1C1E21',
    marginTop: 4,
    textAlign: 'center',
    maxWidth: 70,
  },
});