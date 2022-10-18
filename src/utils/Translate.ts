import { FETCH } from 'api/fetch'

interface Response {
  status: string
  message: string
}

export async function Translate(
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<Response> {
  const payload = {
    source_lang: sourceLang,
    target_lang: targetLang,
    text,
  }

  const url =
    'https://script.google.com/macros/s/AKfycbyIvIhlEIijO0sJMXIUCc28p-Jt6aBJj_IBS2zUrwvrcQ_wZHf0KFJGMYlJeJd98U4I/exec'
  try {
    return await FETCH.post<Response>({
      url,
      payload,
      includeCredentials: false,
    })
  } catch {
    console.log(`Something went wrong when trying to translate '${text}'`)
  }
}
