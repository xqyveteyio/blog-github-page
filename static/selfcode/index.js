
window.onload = function () {
    setTimeout(() => {
        const targetElement = document.querySelector("#body-container");
        if (targetElement.classList.contains('theme-dark')) {
            document.querySelectorAll(".shiki").forEach((item) => {
                item.classList.remove("shiki-light");
                item.classList.add("shiki-dark");
            });
        } else {
            document.querySelectorAll(".shiki").forEach((item) => {
                item.classList.remove("shiki-dark");
                item.classList.add("shiki-light");
            })
        }
        // 创建一个 MutationObserver 实例
        const observer = new MutationObserver((mutationsList) => {
            if (targetElement.classList.contains('theme-dark')) {
                console.log(document.querySelectorAll(".shiki"));
                document.querySelectorAll(".shiki").forEach((item) => {
                    item.classList.remove("shiki-light");
                    item.classList.add("shiki-dark");
                });
            } else {
                document.querySelectorAll(".shiki").forEach((item) => {
                    item.classList.remove("shiki-dark");
                    item.classList.add("shiki-light");
                });
            }
        });

        // 配置选项：监听属性变化
        const config = {
            attributes: true, // 监听属性变化
            attributeFilter: ['class'], // 只监听 class 属性
        };
        observer.observe(targetElement, config);
    }, 500);
}
