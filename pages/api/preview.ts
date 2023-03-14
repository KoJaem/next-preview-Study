import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect, name, age } = req.query;
  res.setPreviewData({name, age});
  typeof redirect === 'string' ? res.redirect('/' + redirect) : res.redirect('/');
  res.end();
}