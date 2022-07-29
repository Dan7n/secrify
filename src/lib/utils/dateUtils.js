import { formatISO, isPast, parseISO } from "date-fns";

export const formatDate = (dateStamp) => formatISO(new Date(dateStamp));

export const hasSecretExpired = (secret) => {
	if (!secret)
		return {
			expired: true,
			reason: "No secret ID",
		};
	const expirationDate = parseISO(secret.expirationDate);

	if (isPast(expirationDate)) {
		return {
			expired: true,
			reason: "Expiration date has passed",
		};
	}

	return {
		expired: false,
		reason: "",
	};
};
