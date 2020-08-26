const mock = {
  items: [{
    "isActive": true,
    "tags": [ "support-info" ],
    "image": "#",
    "title": "Hello, World!",
    "description": ""
  }],
};

it(`should be truly`, () => {
  const humansData = mock;

  expect(humansData.events[0].title).toBe(`Hello, World!`);
});
