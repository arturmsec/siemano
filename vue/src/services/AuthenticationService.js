import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}


// sample representation of data
// AuthenticationService.register({
//   email: 'testing@gmail.com'
//   password '123456'
// })