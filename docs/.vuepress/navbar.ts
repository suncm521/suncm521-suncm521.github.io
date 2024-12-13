import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "基础",
        icon: "circle-info",
        children: [
            {
                text: "网络",
                link: '/base/network/'
            },
        ],
    },
    {
        text: '标签',
        icon: 'tag',
        link: '/tag/javascript/'
    },
    {
        text: '分类',
        icon: 'categoryselected',
        link: '/category/前端/'
    },
    {
        text: '时间轴',
        icon: 'time',
        link: '/timeline/'
    },
]);
