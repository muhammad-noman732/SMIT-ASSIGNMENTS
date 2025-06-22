import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MoveHorizontal as MoreHorizontal, ThumbsUp, MessageCircle, Share } from 'lucide-react-native';

interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

interface PostCardProps {
  post: Post;
  onComment?: () => void;
}

export function PostCard({ post, onComment }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.authorAvatar }} style={styles.avatar} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{post.author}</Text>
          <Text style={styles.postTime}>{post.time}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <MoreHorizontal size={20} color="#65676B" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <Text style={styles.content}>{post.content}</Text>

      {/* Post Image */}
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.postImage} />
      )}

      {/* Post Stats */}
      <View style={styles.stats}>
        <View style={styles.leftStats}>
          <View style={styles.reactionIcons}>
            <Text style={styles.reactionIcon}>👍</Text>
            <Text style={styles.reactionIcon}>❤️</Text>
          </View>
          <Text style={styles.statText}>{likeCount}</Text>
        </View>
        <View style={styles.rightStats}>
          <Text style={styles.statText}>{post.comments} comments</Text>
          <Text style={styles.statText}>{post.shares} shares</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionButton, liked && styles.likedButton]} 
          onPress={handleLike}
        >
          <ThumbsUp size={18} color={liked ? '#1877F2' : '#65676B'} />
          <Text style={[styles.actionText, liked && styles.likedText]}>Like</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={onComment}>
          <MessageCircle size={18} color="#65676B" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Share size={18} color="#65676B" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  postTime: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 2,
  },
  moreButton: {
    padding: 8,
  },
  content: {
    fontSize: 16,
    color: '#1C1E21',
    lineHeight: 22,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 300,
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  leftStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionIcons: {
    flexDirection: 'row',
    marginRight: 6,
  },
  reactionIcon: {
    fontSize: 16,
    marginRight: 2,
  },
  rightStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statText: {
    fontSize: 14,
    color: '#65676B',
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 6,
    gap: 6,
  },
  likedButton: {
    backgroundColor: 'rgba(24, 119, 242, 0.1)',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#65676B',
  },
  likedText: {
    color: '#1877F2',
  },
});