import * as d3 from "d3";

d3.queue()
  .defer(d3.json, "//unpkg.com/world-atlas@1.1.4/world/50m.json")
  .defer(d3.csv, "./data/all_data.csv", function(row) {
      console.log("continent :",row);
    return {
      continent: row.Continent,
      country: row.Country,
      countryCode: row["Country Code"],
      emissions: +row["Emissions"],
      emissionsPerCapita: +row["Emissions Per Capita"],
      region: row.Region,
      year: +row.Year
    }
    
  })
  .await((error,mapData,data)=>{
    if(error) throw error;
    var extremeYears = d3.extent(data, d => d.year);
    var currentYear = extremeYears[0];
    console.log("hello from await :",currentYear);
  })