import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/users', () => {
        return HttpResponse.json([
            { id: 1, name: 'John Maverick' },
            { id: 2, name: 'Jane Doe' },
        ])
    })
];

