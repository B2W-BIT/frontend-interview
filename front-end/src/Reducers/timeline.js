import { INSERT_POST } from '../Action/timelineType';
import shortid from 'shortid';
export default (state = [], actionResult = {}) => {
    switch (actionResult.type) {
        case INSERT_POST:
            return [
                ...state, {
                    post:{
                            id: shortid.generate(),
                            text:actionResult.text
                        }
                }
            ]
    }
}