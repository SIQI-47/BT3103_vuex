import firebase from "firebase";

const actions = {
  authAction({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },
  signUpAction({ commit }, payload) {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
            return firebase.collection('users').doc(data.user.uid).set({
                email: payload.email,
                name: payload.name,
                mobile: payload.phone,
                cardholder: payload.cardholder,
                creditNum: payload.creditNum,
                csv: payload.csv,
                expiry: payload.expiry,
                travelNum: 0, 
                distance: 0, 
                carbonCut: 0, 
                moneySave: 0, 
                start: "singapore", 
                end: "singapore" 
            })
        })
        .catch(error => {
          commit("setError", error.message);
        });
  },
  signInAction({ commit }, payload) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .catch(error => {
        alert(error.message)
        commit("setError", error.message);
      });
  },
  signOutAction({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setUser", null);
      })
      .catch(error => {
        commit("setError", error.message);
      });
  }
};

export default actions;