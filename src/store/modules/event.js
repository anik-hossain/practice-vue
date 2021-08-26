import EventService from '@/services/EventService';

export const state = {
    events: [],
    event: {},
};
export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event);
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    SET_EVENT(state, event) {
        state.event = event;
    },
};
export const actions = {
    createEvent({ commit, dispatch }, event) {
        EventService.postEvent(event)
            .then(() => {
                commit('ADD_EVENT', event);
                const notification = {
                    type: 'success',
                    message: 'Event created successfully',
                };
                dispatch('notification/add', notification, { root: true });
            })
            .catch((err) => {
                const notification = {
                    type: 'Error',
                    message:
                        'There was a problem creating event: ' + err.message,
                };
                dispatch('notification/add', notification, { root: true });
                throw err;
            });
    },
    fetchEvents({ commit, dispatch }, { per_page, page }) {
        EventService.getEvents(per_page, page)
            .then((response) => {
                commit('SET_EVENTS', response.data);
            })
            .catch((err) => {
                const notification = {
                    type: 'Error',
                    message:
                        'There was a problem fetching events: ' + err.message,
                };
                dispatch('notification/add', notification, { root: true });
            });
    },
    fetchEvent({ commit, getters, dispatch }, id) {
        let event = getters.getEventById(id);
        if (event) {
            commit('SET_EVENT', event);
        } else {
            EventService.getEvent(id)
                .then((response) => commit('SET_EVENT', response.data))
                .catch((err) => {
                    const notification = {
                        type: 'Error',
                        message:
                            'There was a problem fetching event: ' +
                            err.message,
                    };
                    dispatch('notification/add', notification, { root: true });
                });
        }
    },
};
export const getters = {
    getEventById: (state) => (id) => {
        return state.events.find((event) => event.id === id);
    },
};
