import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export const useBreadCrumb = (location) => {
  const breadcrumbNameMap = {
    "/admin": "admin",
   
    "/admin/home": "home",
    "/admin/setting": "setting",
    "/admin/products": "products",
    "/admin/teacher": "teachers",

    "/monitoring":"monitoring",
    "/monitoring/home": "home",

    "/teacher": "teacher",
    "/teacher/home": "home",
    "/teacher/group": "groups",
    "/teacher/student": "students",
    "/teacher/setting": "settings",

  };

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  return [breadcrumbItems];
};
