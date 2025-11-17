import { StreamChat } from 'stream-chat';
import ENV from './env.js';

const apiKey = ENV.STREAM_API_KEY as string;
const apiSecret = ENV.STREAM_API_SECRET as string;

if (!apiKey || !apiSecret) console.error('Stream Api key or secret has missing');

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData: any) => {
  try {
    await chatClient.upsertUser(userData);
    console.log(`Stream user upserted successfully:`, userData);
  } catch (error) {
    console.error('Error upserting Stream user:', error);
    throw error;
  }
};

export const deleteStreamUser = async (userId: string) => {
  try {
    await chatClient.deleteUser(userId);
    console.log('Stream user deleted successfully');
  } catch (error) {
    console.error('Error deleting Stream user:', error);
    throw error;
  }
};
