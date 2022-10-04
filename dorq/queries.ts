export const GET_SLUG_DETAILS = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _created_at,
    title,
    author-> {
        name,
        image
    },
    'comments': *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true],
    description,
    mainImage,
    slug,
    body
    }`

export const GET_ALL_SLUGS = `*[_type=="post"]{
        _id,
        slug {
            current
        }
      }`
export const GET_ALL_POSTS = `*[_type=="post"]{
    _id,
    title,
    author -> {
    name, image
  },
  description,
  mainImage,
  slug
  }`
