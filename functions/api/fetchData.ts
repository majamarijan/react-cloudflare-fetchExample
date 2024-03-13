async function getPosts(q='') {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + q);
    const data = await response.json();
    return data;
  }catch(err) {
    return new Response('', {
      status: 404,
      statusText: 'Not Found'
    })
  }
}

export {
  getPosts,
}