const BASE_URL = process.env.BASE_URL;

async function fetcher(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  if (endpoint.startsWith("/")) endpoint = endpoint.slice(1);
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return fetch(`${BASE_URL}/${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { fetcher };
