import Api from '@/services/Api'

export default {
  register(credentials) {
    try {
      return Api().post('/register', credentials)
    }
    catch {
      return { error: "Nieprawidłowy email lub hasło" };
    }
  },
  login(credentials) {
    try {
      return Api().post('/login', credentials)
    }
    catch {
      return { error: "Nieprawidłowy email lub hasło" };
    }
  }
}
