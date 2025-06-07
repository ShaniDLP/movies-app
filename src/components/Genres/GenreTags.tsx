import { Tag, Tooltip } from "antd";
import type { FC } from "react";
import { useGenreMap } from "../../hooks";
import { splitGenres } from "../../utils";

type Props = {
  genreIds: number[];
  forceWrap?: boolean;
  limit?: number;
};

export const GenreTags: FC<Props> = ({
  genreIds,
  forceWrap = false,
  limit = 2,
}) => {
  const { genreMap } = useGenreMap();
  const names = genreIds.map((id) => genreMap[id]).filter(Boolean);

  const { visibleGenres, hiddenGenres } = splitGenres(names, limit);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: forceWrap ? "wrap" : "nowrap",
        overflow: forceWrap ? "visible" : "hidden",
        alignItems: "center",
      }}
    >
      {visibleGenres.map((name) => (
        <Tag key={name} color="blue" style={{ whiteSpace: "nowrap" }}>
          {name}
        </Tag>
      ))}

      {!forceWrap && hiddenGenres.length > 0 && (
        <Tooltip title={hiddenGenres.join(", ")}>
          <Tag color="blue" style={{ whiteSpace: "nowrap", cursor: "pointer" }}>
            +{hiddenGenres.length}
          </Tag>
        </Tooltip>
      )}
    </div>
  );
};
