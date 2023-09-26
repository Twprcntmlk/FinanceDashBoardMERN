import clientPromise from '@/lib/mongodb';
import { GetTransactionsResponse } from 'pages/api/types';
// import { remark } from 'remark';
// import remarkMdx from 'remark-mdx';
// import { serialize } from 'next-mdx-remote/serialize';
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote';


export async function getTransactions(): Promise<GetTransactionsResponse[] | null> {
  const client = await clientPromise;
  const collection = client.db('Dashboard').collection('transactions');

  const results:GetTransactionsResponse[]= (await collection
    .find()
    .limit(50)
    .sort({ createdOn: -1 })
    .toArray())as unknown as GetTransactionsResponse[];

  if (results) {
    return results;
  } else {
    return null;
  }
}
