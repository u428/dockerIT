import React from 'react'
import { Redirect, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
import Login from '../pages/auth/Login'
import SuperAdmin from '../pages/superAdmin/SuperAdmin'
import Teacher from '../pages/teacher/Teacher'
import Monitoring from '../pages/monitoring/monitoring'
import { ProtectedRouteAdmin } from './ProtectedRouteAdmin'
import { ProtectedRouteAuth } from './ProtectedRouteAuth'
import { ProtectedRouteTeacher } from './ProtectedRouteTeacher'
import { ProtectedRouteSuperAdmin } from './ProtectedRouteSuperAdmin'
import { ProtectedRouteMonitoring } from './ProtectedRouteMonitoring'




function Routes () {
    return (
        <Router>
            <Switch>
                <Redirect exact from={ `/` } to={ `/login` } />
                <ProtectedRouteAdmin path={ `/admin` } component={ Admin } />
                <ProtectedRouteTeacher path={ `/teacher` } component={ Teacher } />
                <ProtectedRouteSuperAdmin path={ `/super_admin` } component={ SuperAdmin } />
                <ProtectedRouteMonitoring path={ `/monitoring` } component={ Monitoring } />
                <ProtectedRouteAuth path={ `/login` } component={ Login } />
                {/* <Redirect exact from={ `/*` } to={ `/login` } /> */}
            </Switch>
        </Router>
    )
}

export default Routes;
