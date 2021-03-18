import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import ListUsuarios from '../Usuarios/index';
import ListRoles from '../Roles/index';
import ListProductos from '../Productos/index';
import ListCategorias from '../Categorias/index';
import ListTiendas from '../Tiendas/index';
import UserFinal from '../FinalUser/index';
import CategoriasFinal from '../FinalCategorias/index';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
    <Route path="/pages/usuarios" component={ListUsuarios} />
    <Route path="/pages/roles" component={ListRoles} />
    <Route path="/pages/productos" component={ListProductos} />
    <Route path="/pages/categorias" component={ListCategorias} />
    <Route path="/pages/tiendas" component={ListTiendas} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/home" component={UserFinal} />
        <Route exact path="/" component={UserFinal} />
        <Route exact path="/categorias" component={CategoriasFinal} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
