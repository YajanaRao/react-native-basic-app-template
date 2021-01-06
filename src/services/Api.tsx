// https://ftgnow.com/testftg/api/register

import { create } from 'apisauce'

// define the api
const api = create({
    baseURL: 'https://ftgnow.com/testftg/api',
    headers: { Accept: 'application/vnd.github.v3+json' },
})

// start making calls
// api
//     .get('/repos/skellock/apisauce/commits')
//     .then(response => response.data[0].commit.message)
//     .then(console.log)


export function register(email: string, moblie: string, password: string) {
    return api.post('/register',
        {
            "AuthMobileNumber": moblie,
            "email": email,
            "AuthPassword": password
        },
        {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }
    )
}
