import React from "react";
import { Box } from "@mui/system";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const EmptyPage = (props) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* Main product section */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Page Not Found</h1>
        <ProductionQuantityLimitsIcon sx={{ fontSize: 100 }} />
      </div>
    </Box>
  );
};

export default EmptyPage;
