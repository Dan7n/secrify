export const formatDate = (dateStamp) => new Date(dateStamp).toISOString().toLocaleString("sv_SE")

export const hasSecretExpired = (secret) => {
    if (!secret) return {
        expired: true,
        reason: "No secret ID"
    }
    const expirationDate = new Date(secret.expirationDate)
    const now = new Date()

    if (expirationDate > now) {
        return {
            expired: true,
            reason: "Expiration date has passed"
        }
    }

    return {
        expired: false,
        reason: ""
    }
}