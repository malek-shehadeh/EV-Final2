// // import React, { useState } from "react";
// // import {
// //   Layout,
// //   Menu,
// //   Card,
// //   Statistic,
// //   Table,
// //   List,
// //   Avatar,
// // } from "@/components/ui/shadcn";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from "recharts";
// // import { Users, Package, MessageSquare, Home } from "lucide-react";

// // const Admin = () => {
// //   const [activeTab, setActiveTab] = useState("overview");

// //   const overviewData = [
// //     { name: "Jan", sales: 4000, users: 2400 },
// //     { name: "Feb", sales: 3000, users: 1398 },
// //     { name: "Mar", sales: 2000, users: 9800 },
// //     { name: "Apr", sales: 2780, users: 3908 },
// //     { name: "May", sales: 1890, users: 4800 },
// //     { name: "Jun", sales: 2390, users: 3800 },
// //   ];

// //   const productsData = [
// //     { id: 1, name: "EV Charger Pro", stock: 50, price: 599.99 },
// //     { id: 2, name: "EV Battery Pack", stock: 30, price: 999.99 },
// //     { id: 3, name: "Wireless Charging Pad", stock: 100, price: 129.99 },
// //   ];

// //   const usersData = [
// //     { id: 1, name: "John Doe", email: "john@example.com", role: "Customer" },
// //     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
// //     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer" },
// //   ];

// //   const messagesData = [
// //     {
// //       id: 1,
// //       sender: "John Doe",
// //       message: "When will my order be shipped?",
// //       time: "2 hours ago",
// //     },
// //     {
// //       id: 2,
// //       sender: "Jane Smith",
// //       message: "I need help with my EV charger installation.",
// //       time: "1 day ago",
// //     },
// //     {
// //       id: 3,
// //       sender: "Bob Johnson",
// //       message: "Is the new EV model available for pre-order?",
// //       time: "3 days ago",
// //     },
// //   ];

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case "overview":
// //         return (
// //           <div className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //               <Card>
// //                 <Statistic title="Total Sales" value={124543} prefix="$" />
// //               </Card>
// //               <Card>
// //                 <Statistic title="Active Users" value={2345} />
// //               </Card>
// //               <Card>
// //                 <Statistic title="Products Sold" value={1234} />
// //               </Card>
// //             </div>
// //             <Card>
// //               <ResponsiveContainer width="100%" height={300}>
// //                 <BarChart data={overviewData}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="name" />
// //                   <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
// //                   <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Bar
// //                     yAxisId="left"
// //                     dataKey="sales"
// //                     fill="#8884d8"
// //                     name="Sales ($)"
// //                   />
// //                   <Bar
// //                     yAxisId="right"
// //                     dataKey="users"
// //                     fill="#82ca9d"
// //                     name="New Users"
// //                   />
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </Card>
// //           </div>
// //         );
// //       case "products":
// //         return (
// //           <Table>
// //             <Table.Header>
// //               <Table.Row>
// //                 <Table.HeaderCell>ID</Table.HeaderCell>
// //                 <Table.HeaderCell>Name</Table.HeaderCell>
// //                 <Table.HeaderCell>Stock</Table.HeaderCell>
// //                 <Table.HeaderCell>Price</Table.HeaderCell>
// //               </Table.Row>
// //             </Table.Header>
// //             <Table.Body>
// //               {productsData.map((product) => (
// //                 <Table.Row key={product.id}>
// //                   <Table.Cell>{product.id}</Table.Cell>
// //                   <Table.Cell>{product.name}</Table.Cell>
// //                   <Table.Cell>{product.stock}</Table.Cell>
// //                   <Table.Cell>${product.price.toFixed(2)}</Table.Cell>
// //                 </Table.Row>
// //               ))}
// //             </Table.Body>
// //           </Table>
// //         );
// //       case "users":
// //         return (
// //           <Table>
// //             <Table.Header>
// //               <Table.Row>
// //                 <Table.HeaderCell>ID</Table.HeaderCell>
// //                 <Table.HeaderCell>Name</Table.HeaderCell>
// //                 <Table.HeaderCell>Email</Table.HeaderCell>
// //                 <Table.HeaderCell>Role</Table.HeaderCell>
// //               </Table.Row>
// //             </Table.Header>
// //             <Table.Body>
// //               {usersData.map((user) => (
// //                 <Table.Row key={user.id}>
// //                   <Table.Cell>{user.id}</Table.Cell>
// //                   <Table.Cell>{user.name}</Table.Cell>
// //                   <Table.Cell>{user.email}</Table.Cell>
// //                   <Table.Cell>{user.role}</Table.Cell>
// //                 </Table.Row>
// //               ))}
// //             </Table.Body>
// //           </Table>
// //         );
// //       case "messages":
// //         return (
// //           <List>
// //             {messagesData.map((message) => (
// //               <List.Item key={message.id}>
// //                 <List.ItemPrefix>
// //                   <Avatar>{message.sender.charAt(0)}</Avatar>
// //                 </List.ItemPrefix>
// //                 <List.ItemText>
// //                   <div className="font-bold">{message.sender}</div>
// //                   <div>{message.message}</div>
// //                   <div className="text-sm text-gray-500">{message.time}</div>
// //                 </List.ItemText>
// //               </List.Item>
// //             ))}
// //           </List>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <Layout.Sider>
// //         <Menu
// //           selectedKeys={[activeTab]}
// //           onSelect={({ key }) => setActiveTab(key)}
// //         >
// //           <Menu.Item key="overview" icon={<Home size={16} />}>
// //             Overview
// //           </Menu.Item>
// //           <Menu.Item key="products" icon={<Package size={16} />}>
// //             Products
// //           </Menu.Item>
// //           <Menu.Item key="users" icon={<Users size={16} />}>
// //             Users
// //           </Menu.Item>
// //           <Menu.Item key="messages" icon={<MessageSquare size={16} />}>
// //             Messages
// //           </Menu.Item>
// //         </Menu>
// //       </Layout.Sider>
// //       <Layout>
// //         <Layout.Header className="bg-white p-4">
// //           <h1 className="text-2xl font-bold">EV Service Admin Dashboard</h1>
// //         </Layout.Header>
// //         <Layout.Content className="p-6">{renderContent()}</Layout.Content>
// //       </Layout>
// //     </Layout>
// //   );
// // };

// // export default Admin;
// ///////////////////////////////
// import React, { useState } from "react";
// import { Layout, Menu, Card, Statistic, Table, List, Avatar } from "antd";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { Users, Package, MessageSquare, Home } from "lucide-react";

// const { Header, Sider, Content } = Layout;

// const Admin = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const overviewData = [
//     { name: "Jan", sales: 4000, users: 2400 },
//     { name: "Feb", sales: 3000, users: 1398 },
//     { name: "Mar", sales: 2000, users: 9800 },
//     { name: "Apr", sales: 2780, users: 3908 },
//     { name: "May", sales: 1890, users: 4800 },
//     { name: "Jun", sales: 2390, users: 3800 },
//   ];

//   const productsData = [
//     { id: 1, name: "EV Charger Pro", stock: 50, price: 599.99 },
//     { id: 2, name: "EV Battery Pack", stock: 30, price: 999.99 },
//     { id: 3, name: "Wireless Charging Pad", stock: 100, price: 129.99 },
//   ];

//   const usersData = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Customer" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer" },
//   ];

//   const messagesData = [
//     {
//       id: 1,
//       sender: "John Doe",
//       message: "When will my order be shipped?",
//       time: "2 hours ago",
//     },
//     {
//       id: 2,
//       sender: "Jane Smith",
//       message: "I need help with my EV charger installation.",
//       time: "1 day ago",
//     },
//     {
//       id: 3,
//       sender: "Bob Johnson",
//       message: "Is the new EV model available for pre-order?",
//       time: "3 days ago",
//     },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case "overview":
//         return (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <Card>
//                 <Statistic title="Total Sales" value={124543} prefix="$" />
//               </Card>
//               <Card>
//                 <Statistic title="Active Users" value={2345} />
//               </Card>
//               <Card>
//                 <Statistic title="Products Sold" value={1234} />
//               </Card>
//             </div>
//             <Card>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={overviewData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//                   <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//                   <Tooltip />
//                   <Legend />
//                   <Bar
//                     yAxisId="left"
//                     dataKey="sales"
//                     fill="#8884d8"
//                     name="Sales ($)"
//                   />
//                   <Bar
//                     yAxisId="right"
//                     dataKey="users"
//                     fill="#82ca9d"
//                     name="New Users"
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Card>
//           </div>
//         );
//       case "products":
//         const productsColumns = [
//           { title: "ID", dataIndex: "id", key: "id" },
//           { title: "Name", dataIndex: "name", key: "name" },
//           { title: "Stock", dataIndex: "stock", key: "stock" },
//           {
//             title: "Price",
//             dataIndex: "price",
//             key: "price",
//             render: (price) => `$${price.toFixed(2)}`,
//           },
//         ];
//         return (
//           <Table
//             columns={productsColumns}
//             dataSource={productsData}
//             rowKey="id"
//           />
//         );
//       case "users":
//         const usersColumns = [
//           { title: "ID", dataIndex: "id", key: "id" },
//           { title: "Name", dataIndex: "name", key: "name" },
//           { title: "Email", dataIndex: "email", key: "email" },
//           { title: "Role", dataIndex: "role", key: "role" },
//         ];
//         return (
//           <Table columns={usersColumns} dataSource={usersData} rowKey="id" />
//         );
//       case "messages":
//         return (
//           <List
//             itemLayout="horizontal"
//             dataSource={messagesData}
//             renderItem={(message) => (
//               <List.Item>
//                 <List.Item.Meta
//                   avatar={<Avatar>{message.sender.charAt(0)}</Avatar>}
//                   title={message.sender}
//                   description={message.message}
//                 />
//                 <div className="text-sm text-gray-500">{message.time}</div>
//               </List.Item>
//             )}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider>
//         <Menu
//           selectedKeys={[activeTab]}
//           onClick={({ key }) => setActiveTab(key)}
//           mode="inline"
//         >
//           <Menu.Item key="overview" icon={<Home size={16} />}>
//             Overview
//           </Menu.Item>
//           <Menu.Item key="products" icon={<Package size={16} />}>
//             Products
//           </Menu.Item>
//           <Menu.Item key="users" icon={<Users size={16} />}>
//             Users
//           </Menu.Item>
//           <Menu.Item key="messages" icon={<MessageSquare size={16} />}>
//             Messages
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header className="bg-white p-4">
//           <h1 className="text-2xl font-bold">EV Service Admin Dashboard</h1>
//         </Header>
//         <Content className="p-6">{renderContent()}</Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Admin;
//////////////////////

// import React, { useState } from "react";
// import {
//   Layout,
//   Menu,
//   Card,
//   Statistic,
//   Table,
//   List,
//   Avatar,
//   Button,
//   Input,
//   Modal,
//   Form,
// } from "antd";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Users,
//   Package,
//   MessageSquare,
//   Home,
//   Plus,
//   Edit,
//   Trash2,
// } from "lucide-react";

// const { Header, Sider, Content } = Layout;
// const { Item: FormItem } = Form;

// const Admin = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "EV Charger Pro",
//       stock: 50,
//       price: 599.99,
//       image: "/api/placeholder/200/200",
//     },
//     {
//       id: 2,
//       name: "EV Battery Pack",
//       stock: 30,
//       price: 999.99,
//       image: "/api/placeholder/200/200",
//     },
//     {
//       id: 3,
//       name: "Wireless Charging Pad",
//       stock: 100,
//       price: 129.99,
//       image: "/api/placeholder/200/200",
//     },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [imageFile, setImageFile] = useState(null);

//   const overviewData = [
//     { name: "Jan", sales: 4000, users: 2400 },
//     { name: "Feb", sales: 3000, users: 1398 },
//     { name: "Mar", sales: 2000, users: 9800 },
//     { name: "Apr", sales: 2780, users: 3908 },
//     { name: "May", sales: 1890, users: 4800 },
//     { name: "Jun", sales: 2390, users: 3800 },
//   ];

//   const usersData = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Customer" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer" },
//   ];

//   const messagesData = [
//     {
//       id: 1,
//       sender: "John Doe",
//       message: "When will my order be shipped?",
//       time: "2 hours ago",
//     },
//     {
//       id: 2,
//       sender: "Jane Smith",
//       message: "I need help with my EV charger installation.",
//       time: "1 day ago",
//     },
//     {
//       id: 3,
//       sender: "Bob Johnson",
//       message: "Is the new EV model available for pre-order?",
//       time: "3 days ago",
//     },
//   ];

//   const handleAddProduct = () => {
//     setCurrentProduct(null);
//     setIsModalOpen(true);
//   };

//   const handleEditProduct = (product) => {
//     setCurrentProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleDeleteProduct = (productId) => {
//     setProducts(products.filter((product) => product.id !== productId));
//   };

//   const handleModalSubmit = (values) => {
//     if (currentProduct) {
//       setProducts(
//         products.map((p) =>
//           p.id === currentProduct.id
//             ? { ...p, ...values, image: imageFile || p.image }
//             : p
//         )
//       );
//     } else {
//       const newProduct = {
//         id: products.length + 1,
//         ...values,
//         image: imageFile || "/api/placeholder/200/200",
//       };
//       setProducts([...products, newProduct]);
//     }
//     setIsModalOpen(false);
//     setImageFile(null);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageFile(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case "overview":
//         return (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <Card>
//                 <Statistic title="Total Sales" value={124543} prefix="$" />
//               </Card>
//               <Card>
//                 <Statistic title="Active Users" value={2345} />
//               </Card>
//               <Card>
//                 <Statistic title="Products Sold" value={1234} />
//               </Card>
//             </div>
//             <Card>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={overviewData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//                   <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//                   <Tooltip />
//                   <Legend />
//                   <Bar
//                     yAxisId="left"
//                     dataKey="sales"
//                     fill="#8884d8"
//                     name="Sales ($)"
//                   />
//                   <Bar
//                     yAxisId="right"
//                     dataKey="users"
//                     fill="#82ca9d"
//                     name="New Users"
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Card>
//           </div>
//         );
//       case "products":
//         return (
//           <div>
//             <Button onClick={handleAddProduct} className="mb-4">
//               <Plus size={16} className="mr-2" /> Add Product
//             </Button>
//             <Table dataSource={products} rowKey="id">
//               <Table.Column title="ID" dataIndex="id" key="id" />
//               <Table.Column
//                 title="Image"
//                 dataIndex="image"
//                 key="image"
//                 render={(text) => (
//                   <img
//                     src={text}
//                     alt="product"
//                     className="w-10 h-10 object-cover"
//                   />
//                 )}
//               />
//               <Table.Column title="Name" dataIndex="name" key="name" />
//               <Table.Column title="Stock" dataIndex="stock" key="stock" />
//               <Table.Column
//                 title="Price"
//                 dataIndex="price"
//                 key="price"
//                 render={(text) => `$${text.toFixed(2)}`}
//               />
//               <Table.Column
//                 title="Actions"
//                 key="actions"
//                 render={(text, record) => (
//                   <div>
//                     <Button
//                       onClick={() => handleEditProduct(record)}
//                       className="mr-2"
//                     >
//                       <Edit size={16} />
//                     </Button>
//                     <Button
//                       type="danger"
//                       onClick={() => handleDeleteProduct(record.id)}
//                     >
//                       <Trash2 size={16} />
//                     </Button>
//                   </div>
//                 )}
//               />
//             </Table>
//             <Modal
//               title={currentProduct ? "Edit Product" : "Add Product"}
//               visible={isModalOpen}
//               onCancel={() => setIsModalOpen(false)}
//               footer={null}
//             >
//               <Form
//                 initialValues={
//                   currentProduct || { name: "", stock: 0, price: 0 }
//                 }
//                 onFinish={handleModalSubmit}
//               >
//                 <Form.Item
//                   name="name"
//                   label="Product Name"
//                   rules={[
//                     { required: true, message: "Please enter product name" },
//                   ]}
//                 >
//                   <Input />
//                 </Form.Item>
//                 <Form.Item
//                   name="stock"
//                   label="Stock"
//                   rules={[
//                     { required: true, message: "Please enter stock quantity" },
//                   ]}
//                 >
//                   <Input type="number" />
//                 </Form.Item>
//                 <Form.Item
//                   name="price"
//                   label="Price"
//                   rules={[{ required: true, message: "Please enter price" }]}
//                 >
//                   <Input type="number" step="0.01" />
//                 </Form.Item>
//                 <Form.Item name="image" label="Product Image">
//                   <Input
//                     type="file"
//                     onChange={handleImageUpload}
//                     accept="image/*"
//                   />
//                 </Form.Item>
//                 {imageFile && (
//                   <img
//                     src={imageFile}
//                     alt="Preview"
//                     className="mt-2 w-32 h-32 object-cover"
//                   />
//                 )}
//                 <Button type="primary" htmlType="submit">
//                   {currentProduct ? "Update Product" : "Add Product"}
//                 </Button>
//               </Form>
//             </Modal>
//           </div>
//         );
//       case "users":
//         return (
//           <Table dataSource={usersData} rowKey="id">
//             <Table.Column title="ID" dataIndex="id" key="id" />
//             <Table.Column title="Name" dataIndex="name" key="name" />
//             <Table.Column title="Email" dataIndex="email" key="email" />
//             <Table.Column title="Role" dataIndex="role" key="role" />
//           </Table>
//         );
//       case "messages":
//         return (
//           <List
//             itemLayout="horizontal"
//             dataSource={messagesData}
//             renderItem={(item) => (
//               <List.Item>
//                 <List.Item.Meta
//                   avatar={<Avatar icon={<MessageSquare />} />}
//                   title={item.sender}
//                   description={item.message}
//                 />
//                 <div>{item.time}</div>
//               </List.Item>
//             )}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Layout>
//       <Sider>
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={["overview"]}
//           onClick={(e) => setActiveTab(e.key)}
//         >
//           <Menu.Item key="overview" icon={<Home />}>
//             Overview
//           </Menu.Item>
//           <Menu.Item key="products" icon={<Package />}>
//             Products
//           </Menu.Item>
//           <Menu.Item key="users" icon={<Users />}>
//             Users
//           </Menu.Item>
//           <Menu.Item key="messages" icon={<MessageSquare />}>
//             Messages
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header style={{ background: "#fff", padding: 0 }} />
//         <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
//           <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
//             {renderContent()}
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Admin;
/////////////////////////////////////////////////////////
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Card,
  Statistic,
  Table,
  List,
  Avatar,
  Button,
  Input,
  Modal,
  Form,
} from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  Package,
  MessageSquare,
  Home,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

const { Header, Sider, Content } = Layout;
const { Item: FormItem } = Form;

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "EV Charger Pro",
      stock: 50,
      price: 599.99,
      image: "/image/EV Charger.jpg",
    },
    {
      id: 2,
      name: "EV Battery Pack",
      stock: 30,
      price: 999.99,
      image: "/image/Portable Charger.jpg",
    },
    {
      id: 3,
      name: "Tire",
      stock: 100,
      price: 129.99,
      image: "/image/Tire 1.jpg",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const overviewData = [
    { name: "Jan", sales: 4000, users: 2400 },
    { name: "Feb", sales: 3000, users: 1398 },
    { name: "Mar", sales: 2000, users: 9800 },
    { name: "Apr", sales: 2780, users: 3908 },
    { name: "May", sales: 1890, users: 4800 },
    { name: "Jun", sales: 2390, users: 3800 },
  ];

  const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Customer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer" },
  ];

  const messagesData = [
    {
      id: 1,
      sender: "John Doe",
      message: "When will my order be shipped?",
      time: "2 hours ago",
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "I need help with my EV charger installation.",
      time: "1 day ago",
    },
    {
      id: 3,
      sender: "Bob Johnson",
      message: "Is the new EV model available for pre-order?",
      time: "3 days ago",
    },
  ];

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleModalSubmit = (values) => {
    if (currentProduct) {
      setProducts(
        products.map((p) =>
          p.id === currentProduct.id
            ? { ...p, ...values, image: imageFile || p.image }
            : p
        )
      );
    } else {
      const newProduct = {
        id: products.length + 1,
        ...values,
        image: imageFile || "/api/placeholder/200/200",
      };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
    setImageFile(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <Statistic title="Total Sales" value={124543} prefix="$" />
              </Card>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <Statistic title="Active Users" value={2345} />
              </Card>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <Statistic title="Products Sold" value={1234} />
              </Card>
            </div>
            <Card style={{ backgroundColor: "#e0f7fa" }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={overviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="sales"
                    fill="#8884d8"
                    name="Sales ($)"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="users"
                    fill="#82ca9d"
                    name="New Users"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        );
      case "products":
        return (
          <div>
            <Button
              onClick={handleAddProduct}
              className="mb-4"
              style={{
                backgroundColor: "#00695c",
                borderColor: "#004d40",
                color: "#ffffff",
              }}
            >
              <Plus size={16} className="mr-2" /> Add Product
            </Button>
            <Table dataSource={products} rowKey="id">
              <Table.Column title="ID" dataIndex="id" key="id" />
              <Table.Column
                title="Image"
                dataIndex="image"
                key="image"
                render={(text) => (
                  <img
                    src={text}
                    alt="product"
                    className="w-10 h-10 object-cover"
                  />
                )}
              />
              <Table.Column title="Name" dataIndex="name" key="name" />
              <Table.Column title="Stock" dataIndex="stock" key="stock" />
              <Table.Column
                title="Price"
                dataIndex="price"
                key="price"
                render={(text) => `$${text.toFixed(2)}`}
              />
              <Table.Column
                title="Actions"
                key="actions"
                render={(text, record) => (
                  <div>
                    <Button
                      onClick={() => handleEditProduct(record)}
                      className="mr-2"
                      style={{
                        backgroundColor: "#0288d1",
                        borderColor: "#0277bd",
                        color: "#ffffff",
                      }}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      type="danger"
                      onClick={() => handleDeleteProduct(record.id)}
                      style={{
                        backgroundColor: "#d32f2f",
                        borderColor: "#c62828",
                        color: "#ffffff",
                      }}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                )}
              />
            </Table>
            <Modal
              title={currentProduct ? "Edit Product" : "Add Product"}
              visible={isModalOpen}
              onCancel={() => setIsModalOpen(false)}
              footer={null}
            >
              <Form
                initialValues={
                  currentProduct || { name: "", stock: 0, price: 0 }
                }
                onFinish={handleModalSubmit}
              >
                <Form.Item
                  name="name"
                  label="Product Name"
                  rules={[
                    { required: true, message: "Please enter product name" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="stock"
                  label="Stock"
                  rules={[
                    { required: true, message: "Please enter stock quantity" },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true, message: "Please enter price" }]}
                >
                  <Input type="number" step="0.01" />
                </Form.Item>
                <Form.Item name="image" label="Product Image">
                  <Input
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </Form.Item>
                {imageFile && (
                  <img
                    src={imageFile}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover"
                  />
                )}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      backgroundColor: "#00695c",
                      borderColor: "#004d40",
                    }}
                  >
                    {currentProduct ? "Update Product" : "Add Product"}
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        );
      case "users":
        return (
          <Table dataSource={usersData} rowKey="id">
            <Table.Column title="ID" dataIndex="id" key="id" />
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Email" dataIndex="email" key="email" />
            <Table.Column title="Role" dataIndex="role" key="role" />
          </Table>
        );
      case "messages":
        return (
          <List
            itemLayout="horizontal"
            dataSource={messagesData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<MessageSquare />} />}
                  title={item.sender}
                  description={item.message}
                />
                <div>{item.time}</div>
              </List.Item>
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Sider style={{ backgroundColor: "#004d40" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["overview"]}
          onClick={(e) => setActiveTab(e.key)}
          style={{ backgroundColor: "#004d40", color: "#ffffff" }}
        >
          <Menu.Item
            key="overview"
            icon={<Home style={{ color: "#ffffff" }} />}
          >
            Overview
          </Menu.Item>
          <Menu.Item
            key="products"
            icon={<Package style={{ color: "#ffffff" }} />}
          >
            Products
          </Menu.Item>
          <Menu.Item key="users" icon={<Users style={{ color: "#ffffff" }} />}>
            Users
          </Menu.Item>
          <Menu.Item
            key="messages"
            icon={<MessageSquare style={{ color: "#ffffff" }} />}
          >
            Messages
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header
          style={{ background: "#00695c", color: "#ffffff", padding: "0 16px" }}
        >
          <h1 style={{ color: "#ffffff" }}>Admin Dashboard</h1>
        </Header> */}
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#f5f5f5", minHeight: 360 }}>
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
