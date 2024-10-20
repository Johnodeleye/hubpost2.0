'use client';

import { ShareSocial } from 'react-share-social';

const style = {
  root: {
    backgroundColor: 'transparent', // Changed from '#34C759' to 'transparent'
    color: '#000', 
    fontWeight: 'bold',
    padding: '0', // Removed padding
    borderRadius: '0', // Removed border radius
  },
  socialButton: {
    backgroundColor: '#34C759', // Moved background color to social buttons
    color: '#fff', // Changed text color to white
    fontWeight: 'bold',
    padding: '8px 16px', 
    borderRadius: '10px', 
    border: 'none', // Removed border
  },
};

interface ShareProps {
  url: string;
}

export default function Share({ url }: ShareProps) {
  return (
    <ShareSocial
      url={url}
      socialTypes={['facebook', 'twitter', 'linkedin', 'whatsapp', 'linkedin']}
      style={style}
    />
  );
}