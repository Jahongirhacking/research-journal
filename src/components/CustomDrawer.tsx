
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { Drawer, DrawerProps, Skeleton } from 'antd';
import React, { FC, ReactElement, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getChildElement, onClose, setDrawer } from '../store/slices/drawerSlice';
import { RootState } from '../store/store';
import { DrawerChildTypes, SearchParams } from '../utils/config';

const CustomDrawer: FC<DrawerProps> = (drawerProps) => {
    const { title, isOpen, childType, props } = useSelector(
        (store: RootState) => store.drawer
    );
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.has(SearchParams.Drawer)) {
            dispatch(
                setDrawer({
                    isOpen: true,
                    childType: searchParams.get(SearchParams.Drawer) as DrawerChildTypes,
                    title: (
                        searchParams.get(SearchParams.Drawer) === DrawerChildTypes.RequiredContact ? "Ma'lumotlarni kiritish" : ''
                    )
                })
            );
        } else {
            dispatch(
                setDrawer({
                    isOpen: false,
                    childType: null,
                })
            );
        }
    }, [searchParams, dispatch]);

    const handleClose = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete(SearchParams.Drawer);
        setSearchParams(newParams);
        dispatch(onClose());
    };

    return (
        <Drawer
            closable={false}
            extra={<CloseOutlined onClick={handleClose} />}
            onClose={handleClose}
            title={title || "Yopish"}
            open={isOpen}
            {...drawerProps}
        >
            <Suspense
                fallback={
                    <LoadingOutlined
                        style={{ fontSize: '50pt', color: '#1677ff', display: 'block' }}
                    />
                }
            >
                {childType ? (
                    React.cloneElement(getChildElement(childType) as ReactElement, props)
                ) : (
                    <Skeleton active />
                )}
            </Suspense>
        </Drawer>
    );
};

export default CustomDrawer;