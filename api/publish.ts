import type { VercelRequest, VercelResponse } from '@vercel/node';

const url = process.env.WEBHOOK_URL ?? '';

export default async function handler(_request: VercelRequest, response: VercelResponse) {
  const resp = await fetch(url, {
    method: 'POST',
  });

  console.info('[RESPONSE]', await resp.text());

  response.status(200).json({
    response: 'Done',
  });
}
