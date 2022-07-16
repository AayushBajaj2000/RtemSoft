// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Import package
import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from "twitter-api-sdk";

const client = new Client(
    "AAAAAAAAAAAAAAAAAAAAAOqWewEAAAAACGq5IFuwq4sgnTThgjVbbPvync4%3Dq2VkwY518tGETk9qyyI0BKcuW5gnTu7L2xekqKQFudpeWdoYHD"
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get users tweets and send them to the client
    const tweet = await client.tweets.findTweetsById({ids: ["1509496726855557124", "1500062502851330053"]});

    // Send the response to the client
    res.statusCode = 200;
    res.json(tweet);
}
