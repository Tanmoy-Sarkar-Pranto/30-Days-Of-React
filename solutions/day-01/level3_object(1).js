const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]


function signUp(_id, username, email, password) {
    let nameEligible = false
    let emailEligible = false
    let idEligible = false
    for (let i = 0; i < users.length; i++) {
        if (users[i].username != username) {
            nameEligible = true
        } else {
            nameEligible = false
            break
        }
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email != email) {
            emailEligible = true
        } else {
            emailEligible = false
            break
        }
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i]._id != _id) {
            idEligible = true
        } else {
            idEligible = false
            break
        }
    }
    if (nameEligible && emailEligible && idEligible) {
        let newUser = {
            _id: _id,
            username: username,
            email: email,
            password: password,
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false
        }

        users.push(newUser)
    }else{
        console.log("User already has an account")
    }
}

signUp("sadabjaf", "Pranto", "pra@nto.com", "123456")
signUp("sadabjaf", "Shanto", "pra@nto.com", "123456")

console.log(users)



