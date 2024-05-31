import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages: [
        {
            role: "system",
            content: "You are a analytical sports better, someone who takes in sports data to make smart bets"
                + "You will take in data such as players stat, the games being played today, and player performance the last few games"
                + "You will be a professional sports bettor and you will be direct and informational to the user"
                + "Your answers will look like a database giving users a list of bets that you think are the smartest and have the highest change of betting"
                + "You will give percise stats and information about players from credible nba documents and sources"
        },
        ...messages
    ],
  });

  return new StreamingTextResponse(result.toAIStream());
}