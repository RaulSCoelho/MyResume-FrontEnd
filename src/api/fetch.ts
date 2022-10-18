interface FetchProps {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  url: string
  payload?: Object
  includeCredentials?: boolean
  token?: string
}

function fetchData<T>(props: FetchProps): Promise<T> {
  if (!props.method) props.method = 'GET'
  if (props.includeCredentials === undefined) props.includeCredentials = true

  const options: globalThis.RequestInit = {
    method: props.method,
  }

  if (props.includeCredentials) {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    options.mode = 'cors'
    options.redirect = 'follow'
    options.referrerPolicy = 'origin'
    options.credentials = 'include'
  }

  if (props.payload) options.body = JSON.stringify(props.payload)

  if (props.token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${props.token}`,
    }
  }

  return fetch(props.url, options)
    .then(res => res.json())
    .then(data => data)
}

interface FetchNoPayload {
  url: string
  includeCredentials?: boolean
  token?: string
}

interface FetchWithPayload {
  url: string
  payload: Object
  includeCredentials?: boolean
  token?: string
}

async function GET<T>(props: FetchNoPayload): Promise<T> {
  const fetchProps: FetchProps = {
    url: props.url,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData(fetchProps)
}

async function POST<T>(props: FetchWithPayload): Promise<T> {
  const fetchProps: FetchProps = {
    method: 'POST',
    url: props.url,
    payload: props.payload,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData<T>(fetchProps)
}

async function PUT<T>(props: FetchWithPayload): Promise<T> {
  const fetchProps: FetchProps = {
    method: 'PUT',
    url: props.url,
    payload: props.payload,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData<T>(fetchProps)
}

async function PATCH<T>(props: FetchWithPayload): Promise<T> {
  const fetchProps: FetchProps = {
    method: 'POST',
    url: props.url,
    payload: props.payload,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData(fetchProps)
}

async function DELETE<T>(props: FetchNoPayload): Promise<T> {
  const fetchProps: FetchProps = {
    method: 'DELETE',
    url: props.url,
    includeCredentials: props.includeCredentials,
  }

  if (props.token) fetchProps.token = props.token

  return await fetchData(fetchProps)
}

export const FETCH = {
  get: GET,
  post: POST,
  put: PUT,
  patch: PATCH,
  delete: DELETE,
}
