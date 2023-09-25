import clientPromise from '@/lib/mongodb';
import { GetKpisResponse } from '../../pages/api/types';
// import { remark } from 'remark';
// import remarkMdx from 'remark-mdx';
// import { serialize } from 'next-mdx-remote/serialize';
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function getKpis(): Promise<GetKpisResponse[] | null> {
  const client = await clientPromise;
  const collection = client.db('Dashboard').collection('kpis');
  const results: GetKpisResponse[] = (await collection
    .find()
    .toArray()) as unknown as GetKpisResponse[];
  if (results) {
    console.log(results);
    return results;
  } else {
    return null;
  }
}
// export async function getFirstUser(): Promise<UserProps | null> {
//   const client = await clientPromise;
//   const collection = client.db('test').collection('users');
//   const results = await collection.findOne<UserProps>(
//     {},
//     {
//       projection: { _id: 0, emailVerified: 0 }
//     }
//   );
//   if (results) {
//     return {
//       ...results,
//       bioMdx: await getMdxSource(results.bio || placeholderBio)
//     };
//   } else {
//     return null;
//   }
// }

// export async function getAllUsers(): Promise<ResultProps[]> {
//   const client = await clientPromise;
//   const collection = client.db('test').collection('users');
//   return await collection
//     .aggregate<ResultProps>([
//       {
//         //sort by follower count
//         $sort: {
//           followers: -1
//         }
//       },
//       {
//         $limit: 100
//       },
//       {
//         $group: {
//           _id: {
//             $toLower: { $substrCP: ['$name', 0, 1] }
//           },
//           users: {
//             $push: {
//               name: '$name',
//               username: '$username',
//               email: '$email',
//               image: '$image',
//               followers: '$followers',
//               verified: '$verified'
//             }
//           },
//           count: { $sum: 1 }
//         }
//       },
//       {
//         //sort alphabetically
//         $sort: {
//           _id: 1
//         }
//       }
//     ])
//     .toArray();
// }

// export async function searchUser(query: string): Promise<UserProps[]> {
//   const client = await clientPromise;
//   const collection = client.db('test').collection('users');
//   return await collection
//     .aggregate<UserProps>([
//       {
//         $search: {
//           index: 'name-index',
//           /*
//           name-index is a search index as follows:

//           {
//             "mappings": {
//               "fields": {
//                 "followers": {
//                   "type": "number"
//                 },
//                 "name": {
//                   "analyzer": "lucene.whitespace",
//                   "searchAnalyzer": "lucene.whitespace",
//                   "type": "string"
//                 },
//                 "username": {
//                   "type": "string"
//                 }
//               }
//             }
//           }

//           */
//           text: {
//             query: query,
//             path: {
//               wildcard: '*' // match on both name and username
//             },
//             fuzzy: {},
//             score: {
//               // search ranking algorithm: multiply relevance score by the log1p of follower count
//               function: {
//                 multiply: [
//                   {
//                     score: 'relevance'
//                   },
//                   {
//                     log1p: {
//                       path: {
//                         value: 'followers'
//                       }
//                     }
//                   }
//                 ]
//               }
//             }
//           }
//         }
//       },
//       {
//         // filter out users that are not verified
//         $match: {
//           verified: true
//         }
//       },
//       // limit to 10 results
//       {
//         $limit: 10
//       },
//       {
//         $project: {
//           _id: 0,
//           emailVerified: 0,
//           score: {
//             $meta: 'searchScore'
//           }
//         }
//       }
//     ])
//     .toArray();
// }

// export async function getUserCount(): Promise<number> {
//   const client = await clientPromise;
//   const collection = client.db('test').collection('users');
//   return await collection.countDocuments();
// }

// export async function updateUser(username: string, bio: string) {
//   const client = await clientPromise;
//   const collection = client.db('test').collection('users');
//   return await collection.updateOne({ username }, { $set: { bio } });
// }
