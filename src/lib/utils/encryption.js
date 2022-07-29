import CryptoJS from "crypto-js";
import AES from "crypto-js/tripledes";
import dotenv from "dotenv";
dotenv.config();
import { hasSecretExpired } from "./dateUtils";

export const encryptMessage = (secretMessage = "") => {
	const encrypted = AES.encrypt(
		secretMessage,
		process.env.ENCRYPTION_SECRET_KEY
	);
	return encrypted.toString();
};

export const decryptMessage = (encryptedMessage) => {
	const bytes = AES.decrypt(
		encryptedMessage,
		process.env.ENCRYPTION_SECRET_KEY
	);
	return bytes.toString(CryptoJS.enc.Utf8);
};

export const shouldSecretBeDeleted = (secret) => {
	if (!secret) return true
	return secret.oneTimeView || hasSecretExpired(secret).expired
}