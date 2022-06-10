const handlers = require('../handlers');

test('Home page renders correctly', () => {
	const req = {};
	const res = { render: jest.fn() };
	handlers.homePage(req, res);
	expect(res.render.mock.calls[0][0]).toBe('home');
})

test('About page renders correctly with the fortune inside', () => {
	const req = {};
	const res = { render: jest.fn() };
	handlers.aboutPage(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('about');
	expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({fortune: expect.stringMatching(/\W/)}))
})

test('404 handler renders correctly', () => {
	const req = {};
	const res = { render: jest.fn() };
	handlers.notFound(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('404');
})

test('500 handler renders correctly', () => {
	const err = new Error('error');
	const next = jest.fn();
	const req = {};
	const res = { render: jest.fn() };
	handlers.serverError(err, req, res, next);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('500');
})


