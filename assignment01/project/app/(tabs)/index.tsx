import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  Button
} from 'react-native';
import { Search, MessageCircle, Plus } from 'lucide-react-native';
import { Header } from '@/components/Header';
import { StoryCarousel } from '@/components/StoryCarousel';
import { PostCard } from '@/components/PostCard';
import { CreatePostBar } from '@/components/CreatePostBar';

export default function HomeScreen() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<any[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number|null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://dummyjson.com/posts?limit=30');
      const data = await res.json();
      // Fetch users for author info
      const usersRes = await fetch('https://dummyjson.com/users?limit=100');
      const usersData = await usersRes.json();
      const users = usersData.users;
      const fallbackAvatar = 'https://ui-avatars.com/api/?name=Unknown';
      const postsWithAuthors = data.posts.map((post: any) => {
        const user = users.find((u: any) => u.id === post.userId);
        return {
          id: post.id,
          author: user ? user.firstName + ' ' + user.lastName : 'Unknown',
          authorAvatar: user && user.image ? user.image : fallbackAvatar,
          time: post.tags[0] || 'now',
          content: post.body,
          image: `https://picsum.photos/id/${post.id}/500/300`,
          likes: post.reactions.likes,
          dislikes: post.reactions.dislikes,
          comments: Math.floor(Math.random() * 20),
          shares: Math.floor(Math.random() * 10),
        };
      });
      setPosts(postsWithAuthors);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const handleShowComments = async (postId: number) => {
    setSelectedPostId(postId);
    setShowComments(true);
    const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
    const data = await res.json();
    setComments(data.comments);
  };

  const handleCloseComments = () => {
    setShowComments(false);
    setComments([]);
    setSelectedPostId(null);
  };

  if (loading) {
    return <Text style={{margin: 16}}>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryCarousel />
        <CreatePostBar />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onComment={() => handleShowComments(post.id)} />
        ))}
      </ScrollView>
      <Modal visible={showComments} animationType="slide" onRequestClose={handleCloseComments}>
        <View style={{flex:1, backgroundColor:'#fff', padding:16}}>
          <Text style={{fontSize:18, fontWeight:'bold', marginBottom:8}}>Comments</Text>
          {comments.map((comment) => (
            <View key={comment.id} style={{marginBottom:12}}>
              <Text style={{fontWeight:'bold'}}>{comment.user.username}</Text>
              <Text>{comment.body}</Text>
            </View>
          ))}
          <Button title="Close" onPress={handleCloseComments} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
});