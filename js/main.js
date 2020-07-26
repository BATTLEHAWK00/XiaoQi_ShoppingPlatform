var app = new Vue({
    el: '#app',
    data: {
        username: '小七',
        avatarUrl: 'img/avatar.jpg',
        goodslistpattern: [
            {
                name: 'USB光电鼠标',
                price: 79,
                img: 'img/goods/8.jpg',
                sells: 1000
            },
            {
                name: '美容仪',
                price: 299,
                img: 'img/goods/1.webp',
                sells: 5000
            },
            {
                name: '手环',
                price: 199,
                img: 'img/goods/2.webp',
                sells: 500
            },
            {
                name: '长袖',
                price: 149,
                img: 'img/goods/4.webp',
                sells: 60
            },
            {
                name: '牛仔裤',
                price: 89,
                img: 'img/goods/5.webp',
                sells: 189
            },
            {
                name: '匿名者卫衣',
                price: 169,
                img: 'img/goods/6.webp',
                sells: 625
            },
            {
                name: '灰色棉外套',
                price: 269,
                img: 'img/goods/7.webp',
                sells: 365
            },
        ],
        shoppingcart: [
            {
                img: '',
                name: '水杯',
                num: 2,
                price: 55
            },
            {
                img: '',
                name: '香皂',
                num: 2,
                price: 30
            },
            {
                img: '',
                name: '运动鞋',
                num: 1,
                price: 300
            },
            {
                img: '',
                name: 'T恤',
                num: 3,
                price: 78
            },
            {
                img: '',
                name: '短裤',
                num: 2,
                price: 65
            }
        ],
        deliveryInfo:[
            {
                img:'img/goods/5.webp',
                info:'【代收点】您的快件已签收',
                time:'2020/07/01 18:00'
            },
            {
                img:'img/goods/8.jpg',
                info:'正在派送中……',
                time:'2020/07/05 14:01'
            },
            {
                img:'img/goods/2.webp',
                info:'商家已发货',
                time:'2020/07/06 11:05'
            }
        ],
        goodslist: [],
        goodslist2: [],
        goodslist3: [],
        goodslist4: [],
        goodslist5: [],
        favorites: []
    },
    methods: {
        btn404: function () {
            window.location.href = '404.html'
        },
        openfile() {
            this.$refs.openfile.click()
        }
    },
    components: {
        goodsframe: {
            template: '#goodsframe',
            props: ['goodsdata']
        }
    },
    beforeMount() {
        for (var i = 0; i < 10; i++)
            this.goodslist.push(this.goodslistpattern[Math.floor(Math.random() * 7)])
        for (var i = 0; i < 4; i++)
            this.goodslist2.push(this.goodslistpattern[Math.floor(Math.random() * 7)])
        for (var i = 0; i < 4; i++)
            this.goodslist3.push(this.goodslistpattern[Math.floor(Math.random() * 7)])
        for (var i = 0; i < 10; i++)
            this.goodslist4.push(this.goodslistpattern[Math.floor(Math.random() * 7)])
        for (var i = 0; i < 20; i++)
            this.goodslist5.push(this.goodslistpattern[Math.floor(Math.random() * 7)])
        for (var i = 0; i < 40; i++)
            this.favorites.push(this.goodslistpattern[Math.floor(Math.random() * 7)])
    }
})
