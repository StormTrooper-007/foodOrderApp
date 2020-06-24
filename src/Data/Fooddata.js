export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency:'EUR'
    })
}

export const foodItems = [
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section:'Sandwich',
        price:5.50
    },
    {
        name: 'Beilagen Salat',
        img: '/img/salad.jpg',
        section:'Salad',
        price: 10.50
    },
    {
        name: 'Supe del Giorno',
        img: '/img/soup.jpg',
        section:'Soup',
        price: 9.00

    },
    {
        name: 'Cheese Pizza',
        img: '/img/cheesepizza.jpeg',
        section:'Pizza',
        price: 7.50

    },
    {
        name: 'Pizza Salad',
        img: '/img/saladpizza.jpeg',
        section:'Pizza',
        price: 9.00

    },
    {
        name: 'Egg pizza',
        img: '/img/eggpizza.jpeg',
        section:'Pizza',
        price: 8.00
    },
    {
        name:'Pommes Frittes',
        img:'/img/fries.jpeg',
        section: 'Fries',
        price: 8.50
    },
    {
        price: 3.50,
        name: 'Soda',
        section: 'Drinks',
        choices: ['Coke', 'Sprite', 'Beer']
    }
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res
}, {})

