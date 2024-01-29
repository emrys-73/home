/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { json } from '@sveltejs/kit';


export async function POST({ request, locals }) {
    const { UserMessage, AIMessage } = await request.json();

    const UserMessageData = {
        "content": `${UserMessage}`,
        "role": "user",
    }; 

    const UMsg = await locals.pb.collection('3_portfolio_messages').create(UserMessageData);


    const AIMessageData = {
        "content": `${AIMessage}`,
        "role": "assistant",
    };

    const AIMsg = await locals.pb.collection('3_portfolio_messages').create(AIMessageData);


    const result = {
        "Given": {
            "UserMessage": UserMessage,
            "AIMessage": AIMessage,
        },
        "Stored": {
            "UserMessage": UMsg,
            "AIMessage": AIMsg
        }
    }

    console.log(result)
    return json(result)
}