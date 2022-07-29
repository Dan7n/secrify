import { getSecretMessage, deleteSecretBySecretId } from "../../lib/db/supabase";
import { decryptMessage, shouldSecretBeDeleted } from "./../../lib/utils/encryption"
import { hasSecretExpired } from "./../../lib/utils/dateUtils"

export async function POST({ request }) {
    const secretId = await request.json();
    if (!secretId) return {
        stats: 400,
        body: {
            message: "No data found for the supplied secret ID"
        },
    };

    const data = await getSecretMessage(secretId)
    if (!data || !Array.isArray(data) || data.length === 0) return {
        status: 404,
        body: {
            message: "No data found for the supplied secret ID",
            data: null
        }
    }

    const {expired, reason} = hasSecretExpired(data[0])
    if (expired) {
        await deleteSecretBySecretId(data[0]?.secretId)
        return {
            status: 500,
            body: {
                message: "Secret could now be retrieved: " + reason
            }
        }
    }
    
    const encryptedMessage = data[0]?.encryptedMessage
    const decrypted = decryptMessage(encryptedMessage)
    const shouldBeDeleted = shouldSecretBeDeleted(data[0])
    console.log({shouldBeDeleted})
    if (shouldBeDeleted) {
        await deleteSecretBySecretId(data[0]?.secretId)
    }

    return {
        status: 200,
        body: {
            message: "Secret successfully retrived!",
            data: decrypted
        }
    }
}