import Vuex from 'vuex';
import Vue from "vue";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        photos: [],

    },
    mutations: {

        addPhoto(state, photo) {
            state.photos.push(photo);
        },






        // setPhotos(state, photos) {
        //     state.photos = photos;
        // },
    }
});
export default store;
