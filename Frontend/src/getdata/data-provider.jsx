import PropTypes from 'prop-types';
import { useMemo, useReducer, useCallback, useContext } from 'react';
import axios from 'axios';
import { MainContext } from './main-context';

const initialState = {
    get_campagne_state: null,
    put_campagne_state: null,
    add_campagne_state: null
};

const reducer = (state, action) => {
    if (action.type === 'FETCH_CAMPAGNES') {
        return {
            get_campagne_state: action.payload.get_campagne_state
        };
    }
    if (action.type === 'UPDATE_CAMPAGNE') {
        return {
            put_campagne_state: action.payload.put_campagne_state
        };
    }
    if (action.type === 'ADD_CAMPAGNE') {
        return {
            add_campagne_state: action.payload.add_campagne_state
        };
    }
    return state;
};

export function DataProvider({ children }) { // Renamed to start with uppercase
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetch_campagnes = useCallback(async () => {
        const response = await axios.get("http://localhost:8081/api/campagnes/getAll");
        const { data } = response;
        console.log(data);
        dispatch({
            type: 'FETCH_CAMPAGNES', payload: {
                get_campagne_state: data
            }
        });
    }, []);

    const update_Campagne = useCallback(async (updatedCampagne) => {
        const response = await axios.put(`http://localhost:8081/api/campagnes/update/${updatedCampagne.id_campagne}`, updatedCampagne);
        const { data } = response;
        dispatch({
            type: 'UPDATE_CAMPAGNE', payload: {
                get_campagne_state: data
            }
        });    
    },[]);

    const add_Campagne = useCallback(async (formData) => {
        const response = await axios.post('http://localhost:8081/api/campagnes/add', formData);
        const { data } = response;
        dispatch({
            type: 'ADD_CAMPAGNE', payload: {
                add_campagne_state: data
            }
        });    
    },[]);

    const memoizedValue = useMemo(() => ({
        get_campagne_state: state.get_campagne_state,
        put_campagne_state: state.put_campagne_state,
        add_campagne_state: state.add_campagne_state,
        fetch_campagnes,
        update_Campagne,
        add_Campagne
    }), [fetch_campagnes, state.get_campagne_state, update_Campagne, state.put_campagne_state ,add_Campagne , state.add_campagne_state]);

    return <MainContext.Provider value={memoizedValue}>{children}</MainContext.Provider>;
}

export const useData = () => useContext(MainContext); // Ensure useContext is imported

DataProvider.propTypes = {
    children: PropTypes.node,
};
