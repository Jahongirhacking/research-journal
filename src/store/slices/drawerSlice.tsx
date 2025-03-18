import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { DrawerChildTypes } from '../../utils/config';

type IChildType = DrawerChildTypes | null;

interface IState {
    title?: string;
    isOpen?: boolean;
    childType?: IChildType;
    props?: object;
}

const initialState: IState = {
    title: '',
    isOpen: false,
    childType: null,
    props: {},
};

const drawerSlice = createSlice({
    name: 'drawerSlice',
    initialState,
    reducers: {
        onClose: () => {
            return initialState;
        },
        setDrawer: (state, action: PayloadAction<IState>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const getChildElement = (childType: IChildType): ReactElement | null => {
    switch (childType) {
        default:
            return null;
    }
};

export const { onClose, setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;