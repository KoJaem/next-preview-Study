import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect } = req.query;
  res.setPreviewData({data: 'preview Mode!!'});
  typeof redirect === 'string' ? res.redirect('/' + redirect) : res.redirect('/');

}