const data = [
    {
        id: 1,
        title: "Jarrón Circle",
        price: 5300,
        stock: 0,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/7b/e9/c5/7be9c5e2afee85e6cf32093bec345020.jpg"
    },
    {
        id: 2,
        offer: true,
        title: "Tazón Hita",
        price: 2300,
        stock: 10,
        category: "Utilitarios",
        img: "https://i.pinimg.com/564x/a9/b8/d6/a9b8d6edf1c32767e36702a845b5a018.jpg"
    },
    {
        id: 3,
        title: "Bowl Crudo",
        price: 2400,
        stock: 10,
        category: "Utilitarios",
        img: "https://i.pinimg.com/564x/cc/29/8a/cc298acad6c24bfa45dd47f094d39e4f.jpg"
    },
    {
        id: 4,
        title: "Plato Flat",
        price: 1900,
        stock: 10,
        category: "Utilitarios",
        img: "https://images.pexels.com/photos/6270663/pexels-photo-6270663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        title: "Vela Sans",
        price: 1700,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/14/32/ba/1432ba3c7896b25a1091da2ba2c7316d.jpg"
    },
    {
        id: 6,
        title: "Maceta Irregular",
        price: 4300,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/ac/01/e6/ac01e6018da324f956aba8836aa78a97.jpg"
    },
    {
        id: 7,
        title: "Jarrón Seth",
        price: 5600,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/bc/73/84/bc73849963d6f53d47088e2ab48ff3dc.jpg"
    },
    {
        id: 8,
        title: "Taza Zeta",
        price: 1600,
        stock: 10,
        category: "Utilitarios",
        img: "https://i.pinimg.com/564x/ae/7a/28/ae7a28333f655c0b4f442e1bd478d89f.jpg"
    },
    {
        id: 9,
        title: "Fuente Pacific",
        price: 4500,
        stock: 10,
        category: "Utilitarios",
        img: "https://i.pinimg.com/564x/66/22/a3/6622a3e1899c7109f4bdfa5b5b005e72.jpg"
    },
    {
        id: 10,
        title: "Jarrón Origen",
        price: 7500,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/19/71/19/197119c62dfa631c61066ac862fc25c3.jpg"
    },
    {
        id: 11,
        title: "Jarrón Butter",
        price: 7100,
        stock: 10,
        category: "Decorativos",
        img: "https://i.pinimg.com/564x/ca/80/d4/ca80d4c111521fe1c1630ee7d10788e5.jpg"
    },

]

export default function getItems (){
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(data)
        }, 1500)
    }) 
}

export function getItemsByCategory (cat){
   return new Promise ((resolve, reject) => {
    
    let itemFind = data.filter((item) => {
        return item.category === cat;
    });
    setTimeout( () => {
        console.log("Encontramos:", itemFind)
        if (itemFind) resolve (itemFind);
        else reject (new Error("Item no encontrado"));
    }, 1500)
   });
}

export function getSingleItem(idItem) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let itemFind = data.find (item => item.id === Number(idItem))
            if (itemFind)
                resolve (itemFind);
            else 
                reject (new Error ("Item no encontrado"));
        }, 1500);
    });
}
