import clientPromise from '@/lib/mongodb';
import { GetProductsResponse } from 'pages/api/types';
// import { remark } from 'remark';
// import remarkMdx from 'remark-mdx';
// import { serialize } from 'next-mdx-remote/serialize';
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function getProducts(): Promise<GetProductsResponse[] | null> {
  const client = await clientPromise;
  const collection = client.db('Dashboard').collection('products');
  const results: GetProductsResponse[] = (await collection
    .find()
    .toArray()) as unknown as GetProductsResponse[];
  if (results) {
    return results;
  } else {
    return null;
  }
}
