import {BASE_URL} from "./../Consts/API";


const client = async (
  endpoint,
  method,
  body,
  withAuth = false,
  customConfig = {},
) => {
//   const token = localStorage.getItem(TOKEN_BACKUP);
  let error = false;
  let json;

  const headers = withAuth
    ? {'Content-Type': 'application/json',}
    : {'Content-Type': 'application/json'};

  const config = {
    method: method || 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (response.status === 401) {
    error = true;
    json = null;
    return {json, error, code: response.status};
  }

  try {
    json = await response.json();
  } catch {
    json = null;
  }

  if (!response.ok) {
    error = true;
  }
  return {json, error, code: response.status};
}


export const get = async (endpoint, withAuth = false, customConfig = {}) =>
  await client(endpoint, 'GET', null, withAuth, customConfig);
export const post = async (endpoint, body = {}, withAuth = false, customConfig = {}) =>
  await client(endpoint, 'POST', body, withAuth, customConfig);
export const patch = async (endpoint, body = {}, withAuth = false, customConfig = {}) =>
  await client(endpoint, 'PATCH', body, withAuth, customConfig);
export const remove = async (endpoint, body = {}, withAuth = false, customConfig = {}) =>
  await client(endpoint, 'DELETE', body, withAuth, customConfig);