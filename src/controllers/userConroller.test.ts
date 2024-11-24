import app from '../app'
import request from 'supertest'


describe('GET /message',()=>{

    test('should respond with a 200 status and recive helllo world',async()=>{
        const response = await request(app).get('/message');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("hello world");
    })
})

describe('POST /user',()=>{

    test('should return response with status 201 and the new user',async()=>{
        const requestBody = {name: "ohad rot", id: "12345"};

        const response = await request(app).post('/user').send(requestBody);

        expect(response.status).toBe(201);

        expect(response.body).toEqual(requestBody)
    })

    test('should respond 400 id name is missing',async()=>{
        const requestBody = {id: "12345"};

        const response = await request(app).post('/user').send(requestBody);

        expect(response.status).toBe(400);

        expect(response.body.message).toBe("Name or Id are required");
    })
})
