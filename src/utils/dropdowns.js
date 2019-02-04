/**
 * This dropdown config with different options
 */

export default {
  calendarDropdown: [
    { text: "YTD", value: 0 },
    { text: "Past 3 Years", value: 3 },
    { text: "Past 5 Years", value: 5 },
    { text: "Past 10 Years", value: 10 },
    // { text: "All Time", value: -1 }
  ],
  employerGroupsTableDropdown: [ 
    // "All", "Active", "Initial", "Terminated" 
    { key: "all", value: "all", text: "All" },
    { key: "active", value: "active", text: "Active" },
    { key: "initial", value: "initial", text: "Initial" },
    { key: "terminated", value: "terminated", text: "Terminated" }
  ],
  employerGroupsDetailsDropdown: [ 
    // "All", "Active", "Inactive"
    { key: "all", value: "all", text: "All" },
    { key: "active", value: "active", text: "Active" },
    { key: "inactive", value: "inactive", text: "Inactive" }
  ],
  gainedLostDropdown: [
    { label: "States", key: "states" },
    { label: "Gained", key: "gained" },
    { label: "Lost", key: "lost" }
  ],
  gainedLostTable: [
    { label: "States", key: "stateName" },
    { label: "Gained", key: "gainValue" },
    { label: "Lost", key: "lostValue" }
  ],

  donutChartTable: [
    { label: "Year", key: "yearValue" },
    { label: "Active", key: "activeValue" },
    { label: "Passive", key: "passiveValue" }
  ]
};