import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

export default function BlogImageList() {
  return (
    <ImageList cols={3} gap={8}>
      {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Tech Blog</ListSubheader>
      </ImageListItem> */}
      {itemData.map((item) => (
        <a href={item.url} key={item.img} target="_blank" rel="noopener noreferrer">
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
        </a>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://techblog.lycorp.co.jp/static/a9359711b481ac6cf0d0455e51eaf981/d990e/1701233068788.png',
    title: '出前館クーポンサービスでのサーバーアプリケーションのSpring Boot 3系対応',
    url: 'https://techblog.lycorp.co.jp/ja/20231208a',
    rows: 2,
    cols: 2,
    featured: true,
  }
];