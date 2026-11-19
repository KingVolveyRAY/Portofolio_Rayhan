import { githubSnapshot, RepoSnapshot } from '@/data/github-snapshot';

export async function getRepoData(slug: string): Promise<RepoSnapshot | null> {
  const fallback = githubSnapshot[slug] || null;

  // During static generation or without token, rely on instant snapshot
  if (process.env.NEXT_PHASE === 'phase-production-build' || !process.env.GITHUB_TOKEN) {
    return fallback;
  }

  try {
    const repoMapping: Record<string, string> = {
      'dashboard-kualitas-air': 'water-quality-iot-dashboard',
      'woodguard': 'woodguard-esp32cam-telemetry',
      'riverguard': 'riverguard-telemetry',
      'transsim': 'transsim-robot-kinematics',
      'dwp-kemenag': 'dwp-kemenag-backend-api',
      'kantinku': 'kantinku-preorder-system',
      'kost-isnina': 'kost-isnina-management',
      'peminjaman-mandala-robotics': 'mandala-robotics-inventory',
    };

    const repoName = repoMapping[slug];
    if (!repoName) return fallback;

    // Optional fetch with short timeout to prevent blocking build/SSR
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);

    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'Rayhan-Portfolio',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/KingVolveyRAY/${repoName}`, {
      headers,
      signal: controller.signal,
      next: { revalidate: 21600 }, // 6 hours cache per PRD Section 12
    });

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      return {
        name: data.name,
        fullName: data.full_name,
        description: data.description || fallback?.description || '',
        language: data.language || fallback?.language || 'Unknown',
        stars: data.stargazers_count ?? fallback?.stars ?? 0,
        forks: data.forks_count ?? fallback?.forks ?? 0,
        updatedAt: data.updated_at ? data.updated_at.split('T')[0] : fallback?.updatedAt || '',
        url: data.html_url || fallback?.url || 'https://github.com/KingVolveyRAY',
        topics: data.topics || fallback?.topics || [],
      };
    }
  } catch {
    // Graceful fallback to snapshot per PRD Section 16
  }

  return fallback;
}
