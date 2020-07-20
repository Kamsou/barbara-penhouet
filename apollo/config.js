export default function(context) {
  return {
    httpEndpoint: `${process.env.HTTP_ENDPOINT}`,
    getAuth: () => `${process.env.TOKEN_AUTH_DATO}`
  }
}