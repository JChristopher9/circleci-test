import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
const App = () => {
  const [formValues, setFormValues] = useState([]);
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
    setFormValues(values);
  };

  return (
    <div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="teams">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map(field => (
                  <Space
                    key={field.key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="start"
                  >
                    <Form.Item name={[field.name, "selectOptions"]}>
                      <Select>
                        {[1, 2, 3].map(item => {
                          return (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <Form.List name={[field.name, "teamMembers"]}>
                      {(fields, { add, remove }) => {
                        return (
                          <div>
                            {fields.map(field => (
                              <Space
                                key={field.key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="start"
                              >
                                <Form.Item
                                  {...field}
                                  name={[field.name, "first"]}
                                  fieldKey={[field.fieldKey, "first"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing first name",
                                    },
                                  ]}
                                >
                                  <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item
                                  {...field}
                                  name={[field.name, "last"]}
                                  fieldKey={[field.fieldKey, "last"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing last name",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Last Name" />
                                </Form.Item>

                                <Form.Item
                                  {...field}
                                  name={[field.name, "isActive"]}
                                  fieldKey={[field.fieldKey, "isActive"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing last name",
                                    },
                                  ]}
                                  valuePropName="checked"
                                >
                                  <Checkbox />
                                </Form.Item>
                              </Space>
                            ))}

                            <Form.Item>
                              <Button
                                type="dashed"
                                onClick={() => {
                                  add();
                                }}
                                block
                              >
                                <PlusOutlined /> Add Memeber
                                <MinusCircleOutlined
                                  onClick={() => {
                                    remove(field.name);
                                  }}
                                />
                              </Button>
                            </Form.Item>
                          </div>
                        );
                      }}
                    </Form.List>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined /> Add team
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
};

export default App;
