import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image 
} from 'react-native';
import { Camera, CreditCard as Edit, Plus, Settings } from 'lucide-react-native';

const userPosts = [
  {
    id: '1',
    content: 'Had a great weekend hiking in the mountains! 🏔️',
    image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=500',
    likes: 56,
    comments: 12,
    time: '2d',
  },
  {
    id: '2',
    content: 'Celebrating my graduation today! So proud of this achievement 🎓',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=500',
    likes: 189,
    comments: 43,
    time: '1w',
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cover Photo */}
        <View style={styles.coverPhotoContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=500' }} 
            style={styles.coverPhoto} 
          />
          <TouchableOpacity style={styles.coverEditButton}>
            <Camera size={16} color="#1C1E21" />
            <Text style={styles.coverEditText}>Edit Cover Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150' }} 
              style={styles.profileAvatar} 
            />
            <TouchableOpacity style={styles.avatarEditButton}>
              <Camera size={20} color="#1877F2" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.profileName}>John Smith</Text>
          <Text style={styles.profileBio}>Software Developer | Travel Enthusiast | Coffee Lover ☕</Text>
          <Text style={styles.profileLocation}>📍 San Francisco, CA</Text>
          
          <View style={styles.profileStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>342</Text>
              <Text style={styles.statLabel}>Friends</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Photos</Text>
            </View>
          </View>

          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.addStoryButton}>
              <Plus size={16} color="#FFFFFF" />
              <Text style={styles.addStoryText}>Add to Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editProfileButton}>
              <Edit size={16} color="#1C1E21" />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <Settings size={16} color="#1C1E21" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Posts Section */}
        <View style={styles.postsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Posts</Text>
            <TouchableOpacity>
              <Text style={styles.filterText}>Filters</Text>
            </TouchableOpacity>
          </View>
          
          {userPosts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <Image 
                  source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150' }} 
                  style={styles.postAvatar} 
                />
                <View style={styles.postInfo}>
                  <Text style={styles.postAuthor}>John Smith</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </View>
              
              <Text style={styles.postContent}>{post.content}</Text>
              
              {post.image && (
                <Image source={{ uri: post.image }} style={styles.postImage} />
              )}
              
              <View style={styles.postStats}>
                <Text style={styles.postLikes}>❤️ {post.likes}</Text>
                <Text style={styles.postComments}>{post.comments} comments</Text>
              </View>
              
              <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>👍 Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>💬 Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>📤 Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  coverPhotoContainer: {
    position: 'relative',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  coverEditButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 6,
  },
  coverEditText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1E21',
  },
  profileInfo: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -40,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  avatarEditButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#FFFFFF',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4E6EA',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginTop: 12,
  },
  profileBio: {
    fontSize: 16,
    color: '#65676B',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
  },
  profileLocation: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 8,
  },
  profileStats: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 40,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  statLabel: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 4,
  },
  profileActions: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 8,
  },
  addStoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    gap: 6,
    flex: 1,
    justifyContent: 'center',
  },
  addStoryText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4E6EA',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    gap: 6,
    flex: 1,
    justifyContent: 'center',
  },
  editProfileText: {
    color: '#1C1E21',
    fontWeight: '600',
  },
  moreButton: {
    backgroundColor: '#E4E6EA',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  postsSection: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  filterText: {
    fontSize: 16,
    color: '#1877F2',
    fontWeight: '600',
  },
  postCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
    paddingBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postInfo: {
    flex: 1,
  },
  postAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  postTime: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 2,
  },
  postContent: {
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
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
    marginBottom: 8,
  },
  postLikes: {
    fontSize: 14,
    color: '#65676B',
  },
  postComments: {
    fontSize: 14,
    color: '#65676B',
  },
  postActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#65676B',
  },
});