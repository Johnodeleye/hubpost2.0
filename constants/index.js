import { files } from '../app/assets/files';

export const sidebarLinks = [
    {
      imgURL: files.home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: files.search,
      route: "/search",
      label: "Search",
    },
    {
      imgURL: files.heart,
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: files.create,
      route: "/create-post",
      label: "Create Thread",
    },
    {
      imgURL: files.group,
      route: "/communities",
      label: "Communities",
    },
    {
      imgURL: files.user,
      route: "/dashboard",
      label: "Profile",
    },
  ];
  
  // //This profileTabs is what is in the tabList in the user profile
  // export const profileTabs = [
  //   { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  //   { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  //   { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  // ];
  
  // export const communityTabs = [
  //   { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  //   { value: "members", label: "Members", icon: "/assets/members.svg" },
  //   { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  // ];
  
