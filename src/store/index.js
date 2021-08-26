import { createStore } from 'vuex';
import * as user from '@/store/modules/user';
import * as event from '@/store/modules/event';
import * as notification from '@/store/modules/notification';

export default createStore({
    state: {
        categories: [
            'sustainability',
            'nature',
            'animal welfare',
            'housing',
            'education',
        ],
    },
    modules: {
        user,
        event,
        notification,
    },
});
