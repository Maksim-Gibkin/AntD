import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useNavigate } from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const NavBar:FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
    const publicItems = [
        {
            label: 'Логин',
            key: 1,
        },
        {
            label: 'Инфо',
            key: 2,
        }
    ]
    const privateItems = [
        {
            label: 'Выйти',
            key: 1,
        },
        {
            label: 'Инфо',
            key: 2,
        }
    ]

    const router = useNavigate()
    return (
        <Layout.Header>
            <Row justify="end">
                { !isAuth
                    ? <Menu
                        theme="dark"
                        mode="horizontal"
                        items={publicItems}
                        selectable={false}
                        onClick={(el) => el?.key === '1' && router(RouteNames.LOGIN)}
                      />
                    : <>
                        <div style={{color:"white"}}> ИМЯ ФАМИЛИЯ</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={privateItems}
                            selectable={false}
                            onClick={(el) => el?.key === '1' && router(RouteNames.LOGIN)}
                        />
                    </>
                }

            </Row>
        </Layout.Header>
    );
};

export default NavBar;