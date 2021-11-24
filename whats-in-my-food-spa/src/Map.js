import React,{useRef,useEffect,useState} from 'react'
import { select,geoPath,geoMercator ,min,max,scaleLinear} from 'd3'
import useResizeObserver from './useResizeObserver'
import './map.css'
const Map = ({data,year}) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [country,setCountry]=useState(null);
    useEffect(() => {
      const svg = select(svgRef.current);
  
  
      // projects geo-coordinates on a 2D plane
      const projection = geoMercator().fitSize([800,400],country||data)
      const minCalorie=min(data.features,feature=>feature.properties.calorie);
      const maxCalorie=max(data.features,feature=>feature.properties.calorie);
      const pathGenerator = geoPath().projection(projection);
      const colorScale=scaleLinear().domain([minCalorie,maxCalorie]).range(["#ccc","red"]);
  
      // render each country
      svg
        .selectAll(".country")
        .data(data.features)
        .enter().append('path')
        .on("click",feature=>{
            setCountry(country===feature?null:feature);
        })
        .attr("class","country")
        .transition()
        .duration(1000) 
        .attr("fill",feature=>colorScale(feature.properties.calorie))
        .attr("d", feature => pathGenerator(feature));
    
    svg
        .selectAll(".label")
        .data([country])
        .enter().append("text")
        .attr("class","label")
        .text(
            feature=>
                feature &&
                feature.properties.name+": "+feature.properties.calorie.toLocaleString()
        )
        .attr("x",10)
        .attr("y",25)
  
    },[data,dimensions,year,country])
  
    return (
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg style={{marginLeft:"10%",marginTop:"10%"}} ref={svgRef}></svg>
      </div>
    );
  }


export default Map

