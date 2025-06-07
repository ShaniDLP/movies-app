import type { FC } from "react";
import { Row, Col } from "antd";
import { SearchBar } from "./SearchBar";
import { FiltersPanel } from "./FiltersPanel";
import type { Filters } from "../../../types";

type Props = {
  query: string;
  filters: Filters;
  setQuery: (val: string) => void;
  setFilters: (val: Filters) => void;
  onSearch: () => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
};

export const SearchAndFilter: FC<Props> = ({
  query,
  filters,
  setQuery,
  setFilters,
  onSearch,
  onApplyFilters,
  onClearFilters,
}) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }} wrap>
      <Col xs={24} sm={18}>
        <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      </Col>
      <Col xs={24} sm={6}>
        <FiltersPanel
          filters={filters}
          setFilters={setFilters}
          onApplyFilters={onApplyFilters}
          onClearFilters={onClearFilters}
        />
      </Col>
    </Row>
  );
};
