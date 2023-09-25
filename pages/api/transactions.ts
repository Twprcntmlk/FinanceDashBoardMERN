import type { NextApiRequest, NextApiResponse } from 'next';
import { getTransactions } from 'lib/api/transactions';
import { GetTransactionsResponse } from './types';
import divideNumbersBy100 from './helper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const result = (await getTransactions());
      if (result) {
        console.log(result);
        return res.status(200).json(divideNumbersBy100(result));
      } else {
        return res.status(404).json({ message: 'Kpis not found' });
      }
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
