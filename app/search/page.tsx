// // SearchPage.tsx
// "use client";

import Searchbar from "@/components/SearchBar"

// import * as React from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import Searchbar from "@/components/SearchBar";
// import AuthorCard from "@/components/AuthorCard";
// import PostCard from "@/components/PostCard";
// import { TAuthor, TPost } from "@/app/types";

// interface Props {
//   routeType: string;
// }

// function SearchPage({ routeType }: Props) {
//   const [authors, setAuthors] = React.useState<TAuthor[]>([]);
//   const [filteredAuthors, setFilteredAuthors] = React.useState<TAuthor[]>([]);
//   const [posts, setPosts] = React.useState<TPost[]>([]);
//   const [filteredPosts, setFilteredPosts] = React.useState<TPost[]>([]);
//   const [searchQuery, setSearchQuery] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

//   const fetchAuthors = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("/api/authors");
//       const data: TAuthor[] = await response.json();
//       setAuthors(data);
//       setFilteredAuthors(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPosts = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("/api/posts");
//       const data: TPost[] = await response.json();
//       setPosts(data);
//       setFilteredPosts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     const filteredAuthors = authors.filter((author) =>
//       author.name.toLowerCase().includes(query.toLowerCase()) ||
//       author.email.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredAuthors(filteredAuthors);

//     const filteredPosts = posts.filter((post) =>
//       post.title.toLowerCase().includes(query.toLowerCase()) ||
//       post.content.toLowerCase().includes(query.toLowerCase()) ||
//       post.catName?.toLowerCase().includes(query.toLowerCase()) ||
//       post.author.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredPosts(filteredPosts);
//   };

//   React.useEffect(() => {
//     fetchAuthors();
//     fetchPosts();
//   }, []);

//   return (
//     <div className="mt-1 flex flex-col gap-3">
//       <Searchbar handleSearch={handleSearch} routeType={routeType} />
//       <Tabs className="text-white ml-7">
//         <TabsList>
//           <TabsTrigger value="users">Users</TabsTrigger>
//           <TabsTrigger value="posts">Posts</TabsTrigger>
//         </TabsList>
//         <TabsContent value="users">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             filteredAuthors.length > 0 ? (
//               filteredAuthors.map((author) => (
//                 <AuthorCard key={author.id} author={author} />
//               ))
//             ) : (
//               <p>No users found</p>
//             )
//           )}
//         </TabsContent>
//         <TabsContent value="posts">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             filteredPosts.length > 0 ? (
//               filteredPosts.map((post) => (
//                 <PostCard key={post.id} post={post} />
//               ))
//             ) : (
//               <p>No posts found</p>
//             )
//           )}
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

// export default SearchPage;


const Page = () => {
  return (
    <div className="flex h-screen justify-center items-center p-4">
      <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-600">
        This Page is not working. Please check back later.
      </p>
    </div>
  );
};

export default Page;