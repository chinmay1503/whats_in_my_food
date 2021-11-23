import React,{useRef,useEffect} from 'react'
import { select,geoPath,geoMercator } from 'd3'
import useResizeObserver from './useResizeObserver'
const Map = ({data,year}) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {
      const svg = select(svgRef.current);
  
      const { width, height } =
        dimensions || wrapperRef.current.getBoundingClientRect();
  
      // projects geo-coordinates on a 2D plane
      const projection = geoMercator()
      
      const pathGenerator = geoPath().projection(projection);
  
      // render each country
      svg
        .selectAll(".country")
        .data(data.features)
        .enter().append('path')
     
        .attr("d", feature => pathGenerator(feature));
  
    },[data,dimensions,year])
  
    return (
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}></svg>
      </div>
    );
  }


export default Map

