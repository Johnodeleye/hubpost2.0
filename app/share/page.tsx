"use client";

import { ShareSocial } from 'react-share-social';
const style = {
    root: {
      backgroundColor: '#34C759', // green-500
      color: '#000', // black
      fontWeight: 'bold',
      padding: '8px 16px', // py-2 px-4
      borderRadius: '10px', // rounded-lg
    },
  };

export default function Share() {
  return (
    <ShareSocial
    url="url_to_share.com"
    socialTypes={['facebook', 'twitter', 'linkedin']}
    style={style}
  />
  );
}