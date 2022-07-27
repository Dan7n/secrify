import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

import { formatDate } from "./../utils/dateUtils";

const supabaseUrl = process.env.SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//{ secretText: '', selectedDuration: 1800000, oneTimeView: true }
export const createNewSecret = async ({
	secretId,
	encryptedMessage,
	expirationDate,
	oneTimeView,
}) => {
	console.log(expirationDate)
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
