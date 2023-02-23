import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Toolbar,
  Slider,
} from "@mui/material";

// function valuetext(value) {
//   return `$${value}`;
// }

const Filter = ({ filter, setFilter }) => {
  const [expanded, setExpanded] = useState(false);
  const [categoryFilter, setCategory] = useState(null);
  const [rating, setRating] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [changed, setChanged] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePrice = (event) => {
    setPrice((prev) => ({
      ...prev,
      selected: event.target.value,
    }));
  };

  const handleRating = (event, newValue) => {
    setRating(newValue);
  };

  const categoryCheckHandler = (e, item) => {
    setCategory((prevState) => {
      return {
        ...prevState,
        [item]: e.target.checked,
      };
    });
  };

  useEffect(() => {
    if (categoryFilter && rating && price) {
      let bool = false;
      Object.keys(categoryFilter).forEach((key) => {
        if (categoryFilter[key] !== filter.categories[key]) {
          bool = true;
        }
      });
      if (rating[0] !== filter.rating[0] || rating[1] !== filter.rating[1]) {
        bool = true;
      }
      if (
        price.selected[0] !== filter.price.selected[0] ||
        price.selected[1] !== filter.price.selected[1]
      ) {
        bool = true;
      }
      setChanged(bool);
    }
  }, [categoryFilter, rating, price]);

  useEffect(() => {
    setCategory(filter.categories);
    setRating(filter.rating);
    setPrice(filter.price);
    setChanged(false);
  }, [filter]);

  const applyHandler = () => {
    setFilter({
      categories: categoryFilter,
      rating: rating,
      price: price,
    });
  };

  return (
    <div>
      <Toolbar />
      <Typography variant="h6" sx={{ m: 2 }}>
        Filter
      </Typography>
      <Divider />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* inside category */}
          <FormGroup>
            {categoryFilter &&
              Object.keys(categoryFilter).map((key, index) => {
                return (
                  <FormControlLabel
                    key={key}
                    checked={categoryFilter[key]}
                    control={<Checkbox />}
                    onChange={(e) => categoryCheckHandler(e, key)}
                    label={key}
                  />
                );
              })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Inside Price */}
          {price && (
            <div style={{ display: "flex" }}>
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                {Math.floor(price.range[0])}
              </Typography>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={price.selected}
                step={10}
                min={price.range[0]}
                max={price.range[1]}
                onChange={handlePrice}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
              <Typography sx={{ width: "30%", flexShrink: 0 }}>
                {Math.ceil(price.range[1])}
              </Typography>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Inside Rating  */}
          {rating && (
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={rating}
              step={1}
              max={5}
              min={0}
              onChange={handleRating}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Button
        disabled={!changed}
        onClick={applyHandler}
        variant="contained"
        sx={{ mt: 1 }}
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default Filter;
