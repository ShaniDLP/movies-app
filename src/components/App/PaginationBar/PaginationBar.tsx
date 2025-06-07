import { Pagination } from "antd";
import type { FC } from "react";

type Props = {
  current: number;
  total: number;
  pageSize?: number;
  onChange: (page: number) => void;
};

export const PaginationBar: FC<Props> = ({
  current,
  total,
  pageSize = 20,
  onChange,
}) => {
  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      style={{ marginTop: 24, textAlign: "center" }}
    />
  );
};
