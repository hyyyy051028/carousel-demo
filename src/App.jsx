import React, { useEffect } from 'react';
import Carousel from './components/Carousel';
import './App.css';

const images = [
  {
    url: 'https://picsum.photos/800/400?random=1',
    alt: '风景图片 1',
  },
  {
    url: 'https://picsum.photos/800/400?random=2',
    alt: '风景图片 2',
  },
  {
    url: 'https://picsum.photos/800/400?random=3',
    alt: '风景图片 3',
  },
];

function App() {
  useEffect(() => {
    // 添加调试信息
    console.log('App mounted');

    // 检查 DOM 元素
    const root = document.getElementById('root');
    console.log('Root element:', root);

    // 清理函数
    return () => {
      console.log('App unmounted');
    };
  }, []);

  return (
    <div className="app">
      <h1>轮播图演示</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
