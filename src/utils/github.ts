
import { useQuery } from '@tanstack/react-query';

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

export const fetchGithubRepos = async (username: string): Promise<GithubRepo[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  
  return response.json();
};

export const useGithubRepos = (username: string) => {
  return useQuery({
    queryKey: ['githubRepos', username],
    queryFn: () => fetchGithubRepos(username),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
