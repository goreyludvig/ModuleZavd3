import Vuex from 'vuex';
import Vue from "vue";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        photos: [],

        // searchString: "",
        // formVisible: false,
        // formPhoto: {},
        // formNewMode: true
    },
    mutations: {

        addPhoto(state, photo) {
            state.photos.push(photo);
        },






        // setPhotos(state, photos) {
        //     state.photos = photos;
        // },
        // removePhotos(state, photo) {
        //     const index = state.photos.indexOf(photo);
        //     state.photos.splice(index, 1);
        // },
        // updatePhoto(state, photo) {
        //     const index = state.photos.findIndex(b => b._id == photo._id);
        //     Vue.set(state.photos, index, photo);
        // },
    }
});
export default store;
