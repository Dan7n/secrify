/** @type {import('@sveltejs/kit').RequestHandler} */
import { supabase } from "../../lib/db/supabase";
// const {supabase} = await import("./../../db/")
import dotenv from "dotenv";
dotenv.config();

import { encryptMessage } from "./../../lib/utils/encryption";
import { createNewSecret } from "./../../lib/db/supabase"


export async function POST({ request }) {
	try {

		const secretId = generateUID();
		const body = await request.json();

		if (!body || !body.secretText || !body.secretText.trim()) {
			return {
				stats: 400,
				body: "Please return a valid secret body",
			};
		}

		const encryptedMessage = encryptMessage(body.secretText);
		const secretData = {
            secretId,
			encryptedMessage,
			expirationDate: Date.now() + body.selectedDuration,
            oneTimeView: body.oneTimeView
		};

		const res = await createNewSecret(secretData)
		console.log(res)

		return {
			status: 200,
			body: JSON.stringify({secretId})
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			body: {
				message: error.message
			},
		};
	}
}

const generateUID = () =>
	Date.now().toString(36) + Math.random().toString(36).substring(2);
