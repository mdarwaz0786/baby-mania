import { FaProductHunt } from "react-icons/fa";
import { FaFirstOrderAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const items = [
  {
    "title": "Dashboard",
    "icon": MdDashboard,
    "path": "/admin",
  },
  {
    "title": "Product",
    "icon": FaProductHunt,
    "childrens": [
      {
        "title": "All Product",
        "path": "/admin/all-product"
      },
      {
        "title": "Add Product",
        "path": "/admin/add-product"
      }
    ]
  },
  {
    "title": "Order",
    "icon": FaFirstOrderAlt,
    "childrens": [
      {
        "title": "All Order",
        "path": "/admin/all-order"
      },
      {
        "title": "Confirm Order",
        "path": "/admin/confirm-order"
      }
    ]
  }
];

export default items;
