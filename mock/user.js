export default {
  login: req => {
    const { username } = JSON.parse(req.body)
    return { "token": username }
  },
  info: req => {
    const url = req.url
    return {...req, username: url.match(/admin/g)?'admin':'guest', roles: url.match(/admin/g)?['admin']:['guest']}
  },
  logout: () => 'success'
}