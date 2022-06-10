import { homePage } from '../handlers';

test('Home page renders correctly', () => {
	const req = {};
	const res = { render: jest.fn() };
	homePage(req, res);
	expect(res.render.mock.calls[0][0]).toBe('home');
})

