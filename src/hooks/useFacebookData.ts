import { useState, useEffect } from 'react';
import { ParsedPost, FacebookRawPost } from '../types/facebook';
import { parseFacebookData } from '../utils/parser';

export function useFacebookData() {
  const [posts, setPosts] = useState<ParsedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/facebook-data.json');
        if (!response.ok) {
          throw new Error('Failed to load Facebook data');
        }
        const rawData: FacebookRawPost[] = await response.json();
        const parsedPosts = parseFacebookData(rawData);
        setPosts(parsedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error loading data');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { posts, loading, error };
}
