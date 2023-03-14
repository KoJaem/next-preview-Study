import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  res.redirect('/test');
  res.end('Preview mode disabled');
}