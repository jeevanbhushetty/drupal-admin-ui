import AddContent from './components/05_pages/AddContent';
import Content from './components/05_pages/Content/Content';
import Permissions from './components/05_pages/Permissions/Permissions';
import Roles from './components/05_pages/Roles';
import Dblog from './components/05_pages/Reports/Dblog';
import NodeEditForm from './components/05_pages/NodeEditForm';
import NodeAddForm from './components/05_pages/NodeAddForm';

// @todo Share this with Drupal
const routes = {
  '/admin/content': Content,
  '/admin/people/permissions/:role?': Permissions,
  '/admin/people/roles': Roles,
  '/admin/reports/dblog': Dblog,
  '/node/add': AddContent,
  '/node/:nid/edit': NodeEditForm,
  '/node/add/:bundle': NodeAddForm,
};

export default routes;
