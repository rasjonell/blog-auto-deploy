import type { VercelRequest, VercelResponse } from '@vercel/node';

const url = process.env.WEBHOOK_URL ?? '';

export default function handler(_request: VercelRequest, response: VercelResponse) {
  fetch(url, {
    method: 'POST',
  });

  response.status(200).json({
    response: 'Done',
  });
}
