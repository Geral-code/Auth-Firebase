import { createStore } from 'vuex'
import { auth } from '../firebase';
import router from '../router';

export default createStore({
  state: {
    usuario: null,
    error: null
  },
 
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    //usuario va a ser objeto(email: a@mail.com, password: 1234)
    crearUsuario ({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
       .then(response=>{
         console.log(response);
         //otro objeto para almacenarlo al "state.usuario"
         const usuarioCreado = {
           email: response.user.email,
           uid: response.user.uid
         }
         commit('setUsuario', usuarioCreado);

         //Podemos realizar la redireccion
         router.push('/')

       })
       .catch (err => {
         console.log(err);
         commit('setError', err)
       })


    },
    cerrarSesion ({commit}) {
      auth.signOut()
        .then( () => {
          router.push('/login')
        })
    }
  },
  modules: {
  },
  getters:{

  }
})
