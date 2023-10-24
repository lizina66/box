const lazyImages = document.querySelectorAll('img.imgapi');

// 创建 IntersectionObserver 对象，监听图片是否进入视窗
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 图片进入视窗，将其加载
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.remove('imgapi');
      observer.unobserve(entry.target);
    }
  });
});

// 遍历所有需要延迟加载的图片，添加观察者
lazyImages.forEach(img => {
  observer.observe(img);
});