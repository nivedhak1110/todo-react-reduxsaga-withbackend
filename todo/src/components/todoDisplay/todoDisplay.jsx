import { Table, Space } from "antd";
function TodoDisplay({ todos, onDeleteTodo }) {
  const columns = [
    {
      title: "Date",
      dataIndex: "dateValue",
      key: "dateValue",
    },
    {
      title: "Todo",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Status",
      dataIndex: "statusValue",
      key: "statusValue",
    },

    {
      title: "Action",
      key: "id",
      render: (text, record) => {
        const { id } = record;
        return (
          <Space size="middle">
            <button
              type="button"
              onClick={() => onDeleteTodo(id)}
              className="btn btn-danger btn-sm m-2"
            >
              delete
            </button>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="todoContainer">
      <Table columns={columns} dataSource={todos} />
      <button
        type="button"
        onClick={() => onDeleteTodo("all")}
        className="btn btn-danger btn-sm m-2"
      >
        Delete All
      </button>
    </div>
  );
}

export default TodoDisplay;
