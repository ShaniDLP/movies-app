import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { FC } from "react";

type Props = {
  query: string;
  setQuery: (val: string) => void;
  onSearch: () => void;
};

const { Search } = Input;

export const SearchBar: FC<Props> = ({ query, setQuery, onSearch }) => {
  return (
    <Search
      placeholder="Search movies"
      allowClear
      enterButton="Search"
      prefix={<SearchOutlined />}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onSearch={onSearch}
      style={{ width: "100%", marginBottom: 16 }}
    />
  );
};
