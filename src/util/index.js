export const getDownloadLink = (bucket, key) => `https://${bucket}.s3.amazonaws.com/${encodeURI(key)}`;
