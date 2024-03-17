import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Project from './Project'
import Dashboard from './Dashboard'
import Users from './Users'
import BasicGraph from './BasicGraph'

const PublicAndPrivateRoutes = () => {
    let array = [
        { path: '/', component: Project, title: 'Project' },
        { path: '/project', component: Project, title: 'Project' },
        // { path: '/dashboard', component: Dashboard, title: 'Dashboard' },
        // { path: '/users', component: Users, title: 'Users' },
        // { path: '/basic-graph', component: BasicGraph, title: 'basic graph' },
    ]
    const RouteHandler = () => {
        return (
            <Fragment>
                {
                    array.map((main, index) => {
                        return (
                            <Fragment>
                                <Route
                                    key={index}
                                    path={"/dashboard"}
                                    element={
                                        <Dashboard/>
                                    }
                                >
                                    <Route
                                        key={index}
                                        path={'project'}
                                        element={
                                            <Project />
                                        }
                                    />
                                    <Route
                                        key={index}
                                        path={':id'}
                                        element={
                                            <Project />
                                        }
                                    />
                                </Route>
                            </Fragment>
                        );
                    })
                }
            </Fragment>
        )
    }
    return (
        <div>
            <Routes>
                {console.log('{RouteHandler(array)}', RouteHandler(array))}
                {RouteHandler(array)}
            </Routes>
        </div>
    )
}

export default PublicAndPrivateRoutes