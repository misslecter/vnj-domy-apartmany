import type { HouseDetail } from "../model/HouseDetail.ts";
import { Container, Stack, Typography } from "@mui/material";
import { DataGridPremium, type DataGridPremiumProps, type GridColDef } from "@mui/x-data-grid-premium";
import type { Apartment } from "../model/Apartment.ts";
import { useCallback } from "react";
import { PropertyDetail } from "./PropertyDetail.tsx";

type Props = {
  house: HouseDetail;
};

export const columns: GridColDef<Apartment>[] = [
  { field: "number", headerName: "Číslo bytu", width: 85 },
  { field: "layout", headerName: "Dispozice", width: 85 },
  { field: "usable_area", headerName: "Užitná plocha (m²)", width: 150 },
  { field: "totalArea", headerName: "Celková plocha (m²)", width: 150 },
  { field: "balcony", headerName: "Balkón (m²)", width: 100 },
  { field: "garden", headerName: "Zahrada (m²)", width: 110 },
  { field: "storage", headerName: "Sklep (m²)", width: 95 },
  { field: "garage", headerName: "Garáž", width: 75 },
  { field: "price", headerName: "Cena (Kč)", width: 120 },
  { field: "status", headerName: "Stav", width: 120 },
];

export const PropertyList = ({ house }: Props) => {
  const getDetailPanelContent = useCallback<NonNullable<DataGridPremiumProps["getDetailPanelContent"]>>(
    ({ row }) => <PropertyDetail data={row} />,
    []
  );

  const getDetailPanelHeight = useCallback(() => 400, []);

  return (
    <Container>
      <Stack pb={6}>
        <Typography variant={"h3"}>{house.name}</Typography>
        <DataGridPremium
          rows={house.apartments}
          columns={columns}
          getDetailPanelHeight={getDetailPanelHeight}
          getDetailPanelContent={getDetailPanelContent}
          disableRowSelectionOnClick
          hideFooter
        />
      </Stack>
    </Container>
  );
};
