import React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "./DropDown";
import dropdownConfig from "../../utils/dropdowns";

const rowsOptions = [
  { text: "10", value: 10 },
  { text: "25", value: 25 },
  { text: "50", value: 50 }
];

const planYearHistoryOptions = [ 
  // "All", "Active", "Inactive"
  { key: "all", value: "all", text: "All" },
  { key: "active", value: "active", text: "Active" },
  { key: "inactive", value: "inactive", text: "Inactive" }
];

const employerGroupsOptions = [ 
  { key: "all", value: "all", text: "All" },
  { key: "active", value: "active", text: "Active" },
  { key: "initial", value: "initial", text: "Initial" },
  { key: "terminated", value: "terminated", text: "Terminated" }
];

storiesOf("Atoms/DropDown", module)
.add("a dropdown for employer groups details table", () => (
  <DropDown
    placeholder="Select Group"
    options={employerGroupsOptions}
    selection
  />
))
.add("a dropdown for employer groups table with drawers", () => (
  <DropDown
    placeholder="Select Group"
    options={planYearHistoryOptions}
    selection
  />
))
.add("a dropdown for table export", () => (
  <DropDown
    //options={exportOptions}
    className="export-dropdown"
    icon="download"
  />
))
.add("a dropdown for table pagination", () => (
  <DropDown
    placeholder={rowsOptions[0].text}
    options={rowsOptions}
    // simple
    //selection
    inline
    upward
    icon="sort"
  />
))
.add("a dropdown for DrillDown Year Filter", () => (
  <DropDown
    calendarDefault={1}
    defaultValue={dropdownConfig.calendarDropdown[0].value}
    options={dropdownConfig.calendarDropdown}
    placeholder={dropdownConfig.calendarDropdown[0].text}
    selection
    className="quick-year-filter customized"
  />
))
;