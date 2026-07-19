import { Friend, UserProfile } from '../types/facebook';

export const USER_PROFILE: UserProfile = {
  name: 'Enamul Khan',
  bio: 'Web Designer | Frontend Developer | Tech Enthusiast',
  location: 'Kushtia, Bangladesh',
  joinDate: 'Oct 2014',
  joinedYear: 2014,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=enamulkhan',
  coverPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=300&fit=crop',
  totalPosts: 0
};

export const MOCK_FRIENDS: Friend[] = [
  {
    id: '1',
    name: 'Md. Shahriar Parvez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shahriar',
    mutualFriends: 8
  },
  {
    id: '2',
    name: 'Rana Ahmed',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rana',
    mutualFriends: 5
  },
  {
    id: '3',
    name: 'Fatima Hassan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatima',
    mutualFriends: 12
  },
  {
    id: '4',
    name: 'Karim Hossain',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=karim',
    mutualFriends: 6
  },
  {
    id: '5',
    name: 'Sophia Rahman',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sophia',
    mutualFriends: 9
  },
  {
    id: '6',
    name: 'Ibrahim Khan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ibrahim',
    mutualFriends: 4
  },
  {
    id: '7',
    name: 'Nadia Akter',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nadia',
    mutualFriends: 7
  },
  {
    id: '8',
    name: 'Jahid Hassan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jahid',
    mutualFriends: 11
  }
];
