import Api from '@/services/Api'

export default {

  register(credentials) {
    try {
      console.log(credentials);
      return Api().post('/register', credentials);
    }
    catch {
      return { error: "Nieprawidłowy email lub hasło" };
    }
  },
  login(credentials) {
    try {
      console.log(credentials);
      return Api().post('/users/login', credentials);
    }
    catch {
      return { error: "Nieprawidłowy email lub hasło" };
    }
  }
}
