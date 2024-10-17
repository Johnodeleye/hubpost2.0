export type TCategory = {
    id: string,
    catName: string;
};

export type TPost = {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    publicId: string;
    catName?: string;
    links: null | string[];
    createdAt: string;
    authorEmail: string;
    author: {
        name: string;
        image: string;
        id: string;
        bio?: string;
    };
};

// "@/app/types.ts"
export type TUser = {
    email?: string;
    id: string;
    name: string;
    image: string;
    bio?: string;
  };
  