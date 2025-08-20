export async function GET() {
  return Math.random() > 0.5 ? new Response() : undefined
}
