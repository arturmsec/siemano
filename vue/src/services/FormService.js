import Api from '@/services/Api'

export default {
    saveClientInfo (clientInfo) {
      console.log (clientInfo)
      return Api().post('/clients', clientInfo)
    }
  }