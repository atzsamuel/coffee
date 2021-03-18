import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Roles" icon="users">
            <SidebarLink title="Roles" route="/pages/roles" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Usuarios" icon="users">
            <SidebarLink title="Usuarios" route="/pages/usuarios" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Productos" icon="gift">
            <SidebarLink title="Productos" route="/pages/productos" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Categorias" icon="database">
            <SidebarLink title="Categorias" route="/pages/categorias" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Tiendas" icon="store">
            <SidebarLink title="Tiendas" route="/pages/tiendas" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
