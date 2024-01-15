import qs from 'query-string'

export function buildQuery(params) {
  const { type, page = 1, perPage = 20 } = params

  const conditions = [`*[_type=="${type}"`]

  // Calculate pagination limits
  const offset = (page - 1) * perPage
  const limit = perPage

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(' && ')})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`
}

export function formUrlQuery({ params, key, value }) {
  const currentUrl = qs.parse(params)

  if (key && value) {
    currentUrl[key] = value
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  )
}
