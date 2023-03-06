/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import { Button, Form, Input, Modal } from "antd";
import moment from "moment/moment";
import "./list.css";
import { Space, Table } from "antd";

const List = () => {
  const [form] = Form.useForm();
  const [data, setUserData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState();
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setUserData(items);
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setEdit(false);
    setImage("");
  };

  const onFinish = (values) => {
    if (edit) {
      values.profile = image;
      values.id = editId;
      values.password = "123456";
      values.date = moment(new Date()).format("DD/MM/YYYY");
      let arr = data;
      for (let i = 0; i < arr.length; i++) {
        if (i === index) {
          arr[i] = values;
          setIndex("");
        }
      }
      setUserData([...arr]);
      localStorage.setItem("user", JSON.stringify([...arr]));
      setIsModalOpen(false);
      form.resetFields();
      setEdit(false);
      setImage("");
    } else {
      values.profile = image;
      values.id = data.length + 1;
      values.password = "123456";
      values.date = moment(new Date()).format("DD/MM/YYYY");
      setUserData([...data, values]);
      localStorage.setItem("user", JSON.stringify([...data, values]));
      setIsModalOpen(false);
      form.resetFields();
      setImage("");
    }
  };

  const handleEdit = (items, index) => {
    setIsModalOpen(true);
    form.setFieldsValue(items);
    setImage(items?.profile);
    setEdit(true);
    setEditId(items.id);
    setIndex(index);
  };

  const handleDelete = (id) => {
    const removeRowData = data;
    removeRowData.splice(id, 1);
    setUserData([...removeRowData]);
    localStorage.setItem("user", JSON.stringify([...removeRowData]));
  };

  const checkProfile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const columns = [
    {
      title: "Profile",
      dataIndex: "profile",
      key: "profile",
      render: (_, items) => (
        <img src={items?.profile} className="image" alt="img" />
      ),
    },
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Action",
      key: "action",
      render: (_, items, index) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(items, index)}>Edit</Button>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="list-table">
      <Header />
      <div>
        <Button type="primary" onClick={showModal} className="btn">
          AddUser
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
      <Modal
        footer={false}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="profile">
            <input
              type="file"
              className="input-btn"
              onChange={(e) => checkProfile(e)}
              name="setImage"
            />
            {image && (
              <img
                src={image}
                alt="setImage"
                height="110px"
                width="110px"
                style={{ borderRadius: "50%" }}
              />
            )}
          </div>
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {edit ? "Edit" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default List;
