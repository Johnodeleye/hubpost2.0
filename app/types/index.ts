export type TCategory = {
    id: string,
    catName: string;
};

export type TPost = {
    post: any;
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    publicId: string;
    catName?: string;
    links: null | string[];
    createdAt: string;
    authorEmail: string;
    comments: TComment[];
    author: {
        email: string | undefined;
        name: string;
        image: string;
        id: string;
        bio?: string;
    };
};

// "@/app/types.ts"
export type TAuthor = {
        posts: any;
        name: string;
        image: string;
        id: string;
        bio?: string;
        email: string;
  };

  export type TComment = {
    postId: string;
    createdAt: string;
    id: string;
    content: string;
    authorEmail: string;
    author: {
        image: string | undefined;
        name: string
        id: string;
        email: string | undefined;
    }
  }
  