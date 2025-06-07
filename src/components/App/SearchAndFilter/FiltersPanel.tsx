import { Button, Drawer, Slider, Select, Typography, Space, theme } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { Filters } from "../../../types";
import { useGetGenresQuery } from "../../../store/api";

const { Option } = Select;
const { Text } = Typography;

type Props = {
  filters: Filters;
  setFilters: (val: Filters) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
};

export const FiltersPanel = ({
  filters,
  setFilters,
  onApplyFilters,
  onClearFilters,
}: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data } = useGetGenresQuery();
  const { token } = theme.useToken();

  const hasActiveFilters =
    filters.year !== null || filters.rating !== null || filters.genre !== null;

  return (
    <>
      <Button
        icon={<FilterOutlined />}
        onClick={() => setDrawerOpen(true)}
        style={{
          marginBottom: 16,
          backgroundColor: hasActiveFilters ? token.colorPrimary : undefined,
          color: hasActiveFilters ? "#fff" : undefined,
        }}
      >
        Filters
      </Button>

      <Drawer
        title="Filter Movies"
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        footer={
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                onClearFilters();
                setDrawerOpen(false);
              }}
            >
              Clear
            </Button>
            <Button
              type="primary"
              onClick={() => {
                onApplyFilters();
                setDrawerOpen(false);
              }}
            >
              Apply
            </Button>
          </Space>
        }
      >
        <div style={{ marginBottom: 24 }}>
          <Text strong>Year</Text>
          <Slider
            min={1980}
            max={2025}
            marks={{ 1980: "1980", 2025: "2025" }}
            tooltip={{ placement: "top" }}
            value={filters.year ?? undefined}
            onChange={(val) => setFilters({ ...filters, year: val as number })}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <Text strong>Rating</Text>
          <Select
            placeholder="Select rating"
            style={{ width: "100%" }}
            allowClear
            value={filters.rating ?? undefined}
            onChange={(val) => setFilters({ ...filters, rating: val ?? null })}
          >
            {[...Array(11)].map((_, i) => (
              <Option key={i} value={i}>
                {i}+
              </Option>
            ))}
          </Select>
        </div>

        <div>
          <Text strong>Genre</Text>
          <Select
            placeholder="Select genre"
            style={{ width: "100%" }}
            allowClear
            value={filters.genre ?? undefined}
            onChange={(val) => setFilters({ ...filters, genre: val ?? null })}
          >
            {data &&
              data.genres.map((genre) => (
                <Option key={genre.id} value={genre.id}>
                  {genre.name}
                </Option>
              ))}
          </Select>
        </div>
      </Drawer>
    </>
  );
};
