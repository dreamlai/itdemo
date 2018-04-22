angular.module("userApp")
    .constant("sideMent",[
        {
            id: 1,
            name :"信息管理",
            sub: [
            {
                id: 1,
                url: "#",
                name:"公司列表"
            },
            {
                id: 2,
                url: "#",
                name:"职位列表"
            }
            ]
        },
        {
            id: 2,
            name :"Article管理",
            sub: [
            {
                id: 3,
                url: "main.article",
                name:"Article列表"
            },
            {
                id: 4,
                url: "main.article",
                name:"文章管理"
            }
            ]
        },
        {
            id: 3,
            name :"用户管理",
            sub: [
            {
                id: 5,
                url: "#",
                name:"用户列表"
            }
            ]
        },
        {
            id: 4,
            name :"内容管理",
            sub: [
            {
                id: 6,
                url: "#",
                name:"视频管理"
            }
            ]
        },
    ])
    .constant("type",[
        {
            id: 0,
            name: "首页banner"
        },
        {
            id: 1,
            name: "找职位banner"
        },
        {
            id: 2,
            name: "找精英banner"
        },
        {
            id: 3,
            name: "行业大图"
        }
    ])
    .constant("industry", [
        {
            id: 1,
            name: "电子商务"
        },
        {
            id: 2,
            name: "企业服务"
        },
        {
            id: 3,
            name: "O2O"
        },
        {
            id: 4,
            name: "教育"
        },
        {
            id: 5,
            name: "金融"
        },
        {
            id: 6,
            name: "游戏"
        }
    ])
    .constant("state", [
        {
            id: 1,
            name: "草稿"
        },
        {
            id: 2,
            name: "上线"
        }
    ])