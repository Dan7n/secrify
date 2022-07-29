import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

import { formatDate } from "./../utils/dateUtils";

const supabaseUrl = process.env.SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const createNewSecret = async ({
	secretId,
	encryptedMessage,
	expirationDate,
	oneTimeView,
}) => {
	const { data, error } = await supabase.from("secrets").insert({
		secretId,
		encryptedMessage,
		createdAt: formatDate(Date.now()),
		expirationDate: formatDate(expirationDate),
		oneTimeView,
	});

	if (error) {
		console.log(error)
		throw new Error(error.message)
	}
	return data
};

export const getSecretMessage = async (messageId) => {
	if (!messageId) return null;
	const { data, error } = await supabase.from("secrets").select().eq("secretId", messageId)
	if (error) {
		console.log(error)
		throw new Error(error.message)
	}

	return data;
}

export const deleteSecretBySecretId = async (secretId) => {
	if (!secretId) return

	const { data, error } = await supabase
		.from('secrets')
		.delete()
		.match({ secretId })

		if (error) {
			console.log(error)
			throw new Error(error.message)
		}
	
		return data;
}