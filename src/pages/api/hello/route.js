export async function GET(request) {
  return new Response("Hello, Next.js!");
}

// TAMBEM FUNCIONA

// export async function GET(req, res) {
//   const { method } = req;
//   if (method === "GET") {
//     return new Response("Bye, Next.js!");
//   }
// }
