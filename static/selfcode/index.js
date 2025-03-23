// 目标元素
const targetElement = document.querySelector("#body-container");

// 创建一个 MutationObserver 实例
const observer = new MutationObserver((mutationsList) => {
    if (targetElement.classList.contains('theme-dark')) {
        document.querySelectorAll(".shiki").forEach((item) => {
            item.classList.remove("github-light");
            item.classList.add("github-dark");
        });
    } else{
        document.querySelectorAll(".shiki").forEach((item) => {
            item.classList.remove("github-dark");
            item.classList.add("github-light");
        });
    }
    
});

// 配置选项：监听属性变化
const config = {
    attributes: true, // 监听属性变化
    attributeFilter: ['class'], // 只监听 class 属性
};

// 开始观察目标元素
observer.observe(targetElement, config);