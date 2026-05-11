import { community } from '../community';
import type { CommunityInfo } from './types';

export async function getCommunity(): Promise<CommunityInfo> {
  return community;
}
